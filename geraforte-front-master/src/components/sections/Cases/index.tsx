import { Box, Grid, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React from 'react'
import useStyles from './styles'
import CasesTab, { CasesTabProps } from './CasesTab'

export type CasesProps = {
  overTitle: string
  title: string
} & CasesTabProps

const Cases = ({ overTitle, title, items }: CasesProps) => {
  const classes = useStyles()
  return (
    <section className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="overline">
              <Box pb={1} dangerouslySetInnerHTML={{ __html: overTitle }} />
            </Typography>
            <Typography variant="h1">
              <Box
                color="primary.contrastText"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </Typography>
          </Grid>
        </Grid>
        <Box pt={4}>
          <CasesTab items={items} />
        </Box>
      </Container>
    </section>
  )
}

export default Cases
