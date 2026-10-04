import type { Metadata } from 'next'

// Internal team tool: keep it out of search results.
export const metadata: Metadata = {
  title: 'Buyer Finder',
  robots: { index: false, follow: false },
}

export default function BuyerFinderLayout({ children }: { children: React.ReactNode }) {
  return children
}
