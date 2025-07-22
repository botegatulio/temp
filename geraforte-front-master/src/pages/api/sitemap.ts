import type { NextApiRequest, NextApiResponse } from 'next'
import client from 'graphql/client'

const BASE_URL = 'https://geraforte.com'

const GET_ALL_BLOG_SLUGS = `
  query {
    newsItems {
      slugPt: slug_pt
      slugEn: slug_en
      slugEs: slug_es
    }
  }
`

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { newsItems } = await client.request(GET_ALL_BLOG_SLUGS)

    const urls = newsItems.flatMap(({ slugPt, slugEn, slugEs }) => [
      `<url><loc>${BASE_URL}/blog/${slugPt}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`,
      `<url><loc>${BASE_URL}/en/blog/${slugEn}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`,
      `<url><loc>${BASE_URL}/es/blog/${slugEs}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`,
    ])

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>${BASE_URL}</loc>
          <changefreq>daily</changefreq>
          <priority>1.0</priority>
        </url>
        ${urls.join('\n')}
      </urlset>`

    res.setHeader('Content-Type', 'text/xml')
    res.status(200).send(sitemap)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error generating sitemap')
  }
}
