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

export default function Logo({ href = siteHref('/') }: { href?: string }) {
  return (
    <Link href={href} className="logo" aria-label="Talcora home">
      <LogoMark />
      <span className="logo__name">Talcora</span>
    </Link>
  )
}
