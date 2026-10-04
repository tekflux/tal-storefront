import Link from 'next/link'
import Icon from './Icon'
import { formatDate, type Insight } from '@/lib/insights'

export default function InsightCard({ article, featured = false }: { article: Insight; featured?: boolean }) {
  return (
    <Link href={`/insights/${article.slug}`} className={`insight-card reveal${featured ? ' insight-card--featured' : ''}`}>
      <div className="insight-card__img">
        <img src={article.image} alt="" loading="lazy" />
      </div>
      <div className="insight-card__body">
        <div className="insight-card__meta">
          <span>{article.category}</span>
          <span aria-hidden>·</span>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
        </div>
        <h3 className="insight-card__title">{article.title}</h3>
        <p className="insight-card__text">{article.description}</p>
        <span className="insight-card__more">
          Read article <Icon name="arrow" size={16} strokeWidth={2} />
        </span>
      </div>
    </Link>
  )
}
