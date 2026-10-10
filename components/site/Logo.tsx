import Link from 'next/link'
import { siteHref } from '@/lib/site'

export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="#C8913F" />
      {/* T: the bar is a route between two ports */}
      <path d="M10 13.5h20" stroke="#0A1B2B" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M20 13.5V30" stroke="#0A1B2B" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="10" cy="13.5" r="3" fill="#0A1B2B" />
      <path d="M27 9.5l4 4-4 4" stroke="#0A1B2B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Sector names ("Talcora Energy") render as a lockup: the Talcora wordmark, a divider and the
// division in small caps, so every division shares the parent brand mark.
export default function Logo({ href = siteHref('/'), name = 'Talcora' }: { href?: string; name?: string }) {
  const division = name.replace(/^Talcora\s*/, '')
  return (
    <Link href={href} className={division ? 'logo logo--division' : 'logo'} aria-label={`${name} home`}>
      <LogoMark />
      <span className="logo__name">Talcora</span>
      {division && <span className="logo__division">{division}</span>}
    </Link>
  )
}
