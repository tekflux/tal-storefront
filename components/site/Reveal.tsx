'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

// Fades `.reveal` elements in as they scroll into view. The `js` class on <html>
// is set by an inline script in the root layout, so content stays visible without JS.
export default function Reveal() {
  const pathname = usePathname()

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.is-in)'))
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [pathname])

  return null
}
