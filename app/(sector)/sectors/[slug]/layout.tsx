import { notFound } from 'next/navigation'
import Header from '@/components/site/Header'
import SectorFooter from '@/components/site/SectorFooter'
import Reveal from '@/components/site/Reveal'
import { getSector, sectorHref, sectorNavigation } from '@/lib/site'

// Each sector subdomain (energy.talcoraexim.com, ...) is its own branded site:
// its header, menu and footer only cover that sector.
export default async function SectorLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}) {
  const sector = getSector((await params).slug)
  if (!sector) notFound()
  const home = sectorHref(sector)

  return (
    <>
      <Header brand={{ name: sector.brand, href: home }} nav={sectorNavigation(sector)} quoteHref={`${home}#quote`} />
      <main>{children}</main>
      <SectorFooter sector={sector} />
      <Reveal />
    </>
  )
}
