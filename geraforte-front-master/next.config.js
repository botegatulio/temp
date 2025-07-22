// eslint-disable-next-line @typescript-eslint/no-var-requires
const withCSS = require('@zeit/next-css')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config')

console.log("Configuração i18n carregada pelo Next.js:", i18n)

module.exports = withCSS({
  i18n,
  images: {
    domains: ['prod-geraforte.s3.amazonaws.com'],
  },
  async rewrites() {
    return [
      // ✅ REWRITE NOVO PARA O SITEMAP
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      // 🔁 SUAS REGRAS EXISTENTES ABAIXO
      {
        source: '/(sobre|la-empresa)',
        destination: '/about',
      },
      {
        source: '/(produtos|productos)',
        destination: '/products',
      },
      {
        source: '/(exportacao|exportacion)',
        destination: '/exportation',
      },
      {
        source: '/(qualificacao|calificacion)',
        destination: '/qualification',
      },
      {
        source: '/(diversidade-e-sustentabilidade|diversidad-y-sostenibilidad)',
        destination: '/diversity',
      },
      {
        source: '/(segmentos)',
        destination: '/segments',
      },
      {
        source: '/(customer-service|pos-venda|post-venta)',
        destination: '/afterSales',
      },
      {
        source: '/(contato|contacto)',
        destination: '/contact',
      },
      {
        source: '/linhas/:path*',
        destination: '/lines/:path*',
      },
      {
        source: '/lineas/:path*',
        destination: '/lines/:path*',
      },
      {
        source: '/produtos/:path*',
        destination: '/products/:path*',
      },
      {
        source: '/productos/:path*',
        destination: '/products/:path*',
      },
      {
        source: '/(ouvidoria-e-sac|servicio-de-atencion-al-cliente)',
        destination: '/ombudsman-and-customer-service',
      },
    ]
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    })
    return config
  },
  typescript: {
    ignoreBuildErrors: true,
  },
})
