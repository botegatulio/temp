import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from 'theme'
import SiteLayout from 'components/SiteLayout'
import { appWithTranslation } from 'next-i18next'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useRouter } from 'next/router'

const MyApp = (props: AppProps) => {
  const { Component, pageProps, router } = props
  const { locale = 'pt' } = router
  const { pathname } = useRouter()

  // Remove o CSS injetado do SSR
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  // 🔍 Rota isolada para teste leve
  if (pathname === '/teste') {
    return (
      <>
        <Head>
          <title>Teste de Performance</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Geraforte Grupos Geradores LTDA</title>
        <link
          rel="shortcut icon"
          href="/img/favicon/geraforte_favicon_98_x_77.png"
          type="image/x-icon"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SiteLayout
          language={
            locale === 'pt' || locale === 'en' || locale === 'es'
              ? locale
              : 'pt'
          }
        >
          <Component {...pageProps} />
        </SiteLayout>
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(MyApp)
