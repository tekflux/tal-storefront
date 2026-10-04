// Insights / news articles, loaded from Markdown files in content/insights at build time.
//
// To publish an article, add a `.md` file to content/insights (see README.md for the template).
// The file name becomes the URL: content/insights/my-article.md -> /insights/my-article

import fs from 'node:fs'
import path from 'node:path'
import { marked } from 'marked'

export type Insight = {
  slug: string
  title: string
  description: string
  date: string // YYYY-MM-DD
  category: string
  image: string
  author: string
  draft: boolean
  readingMinutes: number
  html: string
}

const DIR = path.join(process.cwd(), 'content', 'insights')

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {} as Record<string, string>, body: raw }
  const data: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(':')
    if (i === -1) continue
    data[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, '')
  }
  return { data, body: match[2] }
}

function load(): Insight[] {
  if (!fs.existsSync(DIR)) return []
  return fs
    .readdirSync(DIR)
    .filter(f => f.endsWith('.md'))
    .map(file => {
      const { data, body } = parseFrontmatter(fs.readFileSync(path.join(DIR, file), 'utf8'))
      const words = body.split(/\s+/).filter(Boolean).length
      return {
        slug: file.replace(/\.md$/, ''),
        title: data.title || file,
        description: data.description || '',
        date: data.date || '1970-01-01',
        category: data.category || 'Insights',
        image: data.image || '/img/vessel-sea.jpg',
        author: data.author || 'Talcora Trade Desk',
        draft: data.draft === 'true',
        readingMinutes: Math.max(1, Math.round(words / 220)),
        html: marked.parse(body, { async: false }) as string,
      }
    })
    .filter(a => !a.draft)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export const insights = load()

export function getInsight(slug: string) {
  return insights.find(a => a.slug === slug)
}

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
