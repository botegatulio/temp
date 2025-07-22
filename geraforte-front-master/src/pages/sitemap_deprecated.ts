import { GetServerSideProps } from 'next'
import client from 'graphql/client'

const BASE_URL = 'https://www.geraforte.com' // substitua pela sua URL real

const GET_ALL_BLOG_SLUGS = `
  query {
    newsItems {
      slugPt: slug_pt
      slugEn: slug_en
      slugEs: slug_es
    }
  }
`

function generateSiteMap(posts: { slugPt: string; slugEn: string; slugEs: string }[]) {
  const urls = posts.flatMap(({ slugPt, slugEn, slugEs }) => {
    return [
      `<url><loc>${BASE_URL}/blog/${slugPt}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`,
      `<url><loc>${BASE_URL}/en/blog/${slugEn}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`,
      `<url><loc>${BASE_URL}/es/blog/${slugEs}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`,
    ]
  })

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${BASE_URL}</loc>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
    ${urls.join('\n')}
  </urlset>`
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const { newsItems } = await client.request(GET_ALL_BLOG_SLUGS)
  const sitemap = generateSiteMap(newsItems)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return { props: {} }
}

export default function Sitemap() {
  return null
}
