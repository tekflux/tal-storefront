import Link from 'next/link'
import Header from '@/components/site/Header'
import Footer from '@/components/site/Footer'
import Icon from '@/components/site/Icon'

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero on-dark" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
          <div className="page-hero__media">
            <img src="/img/vessel-sea.jpg" alt="" />
          </div>
          <div className="wrap">
            <div className="page-hero__inner">
              <p className="eyebrow">Error 404</p>
              <h1 className="h1">
                This page has <em>sailed.</em>
              </h1>
              <p className="lead">The page you are looking for has moved or no longer exists.</p>
              <div className="hero__ctas" style={{ marginTop: 36 }}>
                <Link href="/" className="btn btn--primary">
                  Back to home <Icon name="arrow" size={18} strokeWidth={2} />
                </Link>
                <Link href="/contact" className="btn btn--ghost">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
