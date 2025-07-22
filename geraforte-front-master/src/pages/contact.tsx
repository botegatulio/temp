import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import client from 'graphql/client'
import get_graphql_query, { ContactProps } from 'graphql/queries/contact'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import HeaderInternal from 'components/sections/HeaderInternal'
import { Container, Grid } from '@material-ui/core'

import ContactForm from 'components/ContactForm'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#e3e3e3',
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      [theme.breakpoints.up('md')]: {
        backgroundImage: 'url("/img/abstract-bg-desktop.webp")',
        backgroundSize: 'cover'
      }
    },
    map: {
      '& iframe': {
        width: '100%',
        height: 250,
        [theme.breakpoints.up('md')]: {
          height: 500
        }
      }
    }
  })
)

export default function Contact({ header }: ContactProps) {
  const classes = useStyles()
  return (
    <>
      <HeaderInternal
        headText={{
          top: header.overline,
          title: header.title
        }}
        bgImage={header.image_mobile?.url || ''}
        bgImageDesktop={header.image_desktop?.url || ''}
      />

      <section className={classes.root}>
        <Container maxWidth="lg">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <ContactForm />
            </Grid>
          </Grid>
        </Container>
      </section>

      <div className={classes.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15004.340333648795!2d-44.0272785!3d-19.9208191!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc6ed2a86adc51575!2sGeraforte%20Grupos%20Geradores%20LTDA!5e0!3m2!1spt-BR!2sbr!4v1616549534182!5m2!1spt-BR!2sbr"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'pt' }) => {
  const { contact } = await client.request(get_graphql_query(locale))
  return {
    props: {
      ...contact,
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}
