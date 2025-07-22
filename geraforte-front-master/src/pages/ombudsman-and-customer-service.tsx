import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import client from 'graphql/client'
import get_graphql_query, {
  CustomerServicePageSacProps
} from 'graphql/queries/customerService'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import HeaderInternal from 'components/sections/HeaderInternal'
import { Box, Container, Grid, Typography } from '@material-ui/core'

import CustomerServiceForm from 'components/CustomerServiceForm'
import OmbudsmanForm from 'components/OmbudsmanForm'

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
    }
  })
)

export default function OmbudsmanAndCustomerService({
  header,
  sectionCustomerService,
  sectionOmbudsman
}: CustomerServicePageSacProps) {
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
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h1">
                <Box
                  component="span"
                  dangerouslySetInnerHTML={{
                    __html: sectionCustomerService.title
                  }}
                />
              </Typography>
              <Box
                component="div"
                pt={2}
                dangerouslySetInnerHTML={{
                  __html: sectionCustomerService.content
                }}
              />
              <CustomerServiceForm />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h1">
                <Box
                  component="span"
                  dangerouslySetInnerHTML={{
                    __html: sectionOmbudsman.title
                  }}
                />
              </Typography>
              <Box
                component="div"
                pt={2}
                dangerouslySetInnerHTML={{
                  __html: sectionOmbudsman.content
                }}
              />
              <OmbudsmanForm />
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'pt' }) => {
  const { customerServicePageSac } = await client.request(
    get_graphql_query(locale)
  )
  return {
    props: {
      ...customerServicePageSac,
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}
