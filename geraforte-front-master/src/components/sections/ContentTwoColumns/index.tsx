import React from 'react'
import { Box, Container, Grid, Typography } from '@material-ui/core'
import useStyles from './styles'

type ContentTwoColumnsPros = {
  overTitle?: string
  title?: string
  contentHtml?: string
}

export default function ContentTwoColumns({
  overTitle = '',
  title = '',
  contentHtml = ''
}: ContentTwoColumnsPros) {
  const classes = useStyles()

  return (
    <section className={classes.root} id="content-two-columns">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.itemTitle}>
            <Typography variant="overline">
              <Box
                fontWeight="fontWeightRegular"
                pb={1}
                dangerouslySetInnerHTML={{ __html: overTitle }}
              />
            </Typography>
            <Typography variant="h4">
              <Box
                fontWeight="fontWeightRegular"
                fontSize="h3"
                color="secondary.dark"
                pb={1}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </Typography>
          </Grid>

          <Grid item xs={12} className={classes.itemContent}>
            <Box dangerouslySetInnerHTML={{ __html: contentHtml }} />
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
