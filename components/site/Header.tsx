'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import Icon from './Icon'
import { navigation, siteHref, type NavItem } from '@/lib/site'

// Sector subdomains pass their own brand, menu and quote link; the defaults are the corporate site's.
export default function Header({
  brand,
  nav = navigation,
  quoteHref = siteHref('/contact'),
}: {
  brand?: { name: string; href: string }
  nav?: NavItem[]
  quoteHref?: string
} = {}) {
  const pathname = usePathname()
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  // Hides the hover dropdown after a click until the pointer leaves it,
  // otherwise it stays open over the new page.
  const [menuDismissed, setMenuDismissed] = useState(false)

  const dismissMenu = () => {
    setMenuDismissed(true)
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur()
  }

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const isActive = (href: string) => {
    const path = href.replace(/^https?:\/\/[^/]+/, '') || '/'
    return path.startsWith('/') && !path.includes('#') && (pathname === path || pathname.startsWith(`${path}/`))
  }
  const logo = <Logo href={brand?.href} name={brand?.name} />

  return (
    <header className={`site-header${solid ? ' is-solid' : ''}`}>
      <div className="wrap site-header__bar">
        {logo}

        <nav className="site-nav" aria-label="Main">
          {nav.map(item =>
            item.children ? (
              <div
                className={`site-nav__item${menuDismissed ? ' is-dismissed' : ''}`}
                key={item.href}
                onMouseLeave={() => setMenuDismissed(false)}
              >
                <Link
                  href={item.href}
                  onClick={dismissMenu}
                  className="site-nav__link"
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  aria-haspopup="true"
                >
                  {item.label}
                  <Icon name="chevron" size={14} strokeWidth={2.2} />
                </Link>
                <div className="site-nav__menu">
                  {item.children.map(child => (
                    <Link key={child.href} href={child.href} onClick={dismissMenu}>
                      {child.label}
                    </Link>
                  ))}
                  <div className="site-nav__menu-foot">
                    <Link href={item.href} className="link-arrow" style={{ padding: 0 }} onClick={dismissMenu}>
                      View all sectors <Icon name="arrow" size={16} strokeWidth={2} />
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="site-nav__link"
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="site-header__actions">
          <Link href={quoteHref} className="btn btn--primary btn--sm">
            Request a quote
          </Link>
          <button className="menu-toggle" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}>
            <Icon name="menu" />
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-nav" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="mobile-nav__top">
            {logo}
            <button className="menu-toggle" onClick={() => setOpen(false)} aria-label="Close menu">
              <Icon name="close" />
            </button>
          </div>
          <ul className="mobile-nav__list">
            <li>
              <Link href={brand?.href ?? siteHref('/')}>Home</Link>
            </li>
            {nav.map(item => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
                {item.children && (
                  <ul className="mobile-nav__sub">
                    {item.children.map(child => (
                      <li key={child.href}>
                        <Link href={child.href}>{child.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link href={quoteHref} className="btn btn--primary" style={{ marginTop: 'auto' }} onClick={() => setOpen(false)}>
            Request a quote <Icon name="arrow" size={18} strokeWidth={2} />
          </Link>
        </div>
      )}
    </header>
  )
}
