import { Box, Grid, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React from 'react'
import useStyles from './styles'
import CardGama, { CardGamaProps } from 'components/Cards/CardGama'

type TwoColumnsAndHighlightedItemsProps = {
  topText: string
  title: string
  content: string
  items: CardGamaProps[]
  backgroundDesktop?: string
}

const TwoColumnsAndHighlightedItems = ({
  topText,
  title,
  content,
  items,
  backgroundDesktop
}: TwoColumnsAndHighlightedItemsProps) => {
  const classes = useStyles({ backgroundDesktop })
  return (
    <section className={classes.root} id="two-columns-and-highlited-items">
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item md={6}>
            <Typography variant="overline">
              <Box dangerouslySetInnerHTML={{ __html: topText }} mb={1} />
            </Typography>
            <Typography variant="h1">
              <Box dangerouslySetInnerHTML={{ __html: title }} />
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" className={classes.containerText}>
        <Grid container spacing={2} alignItems="center">
          <Grid item className={classes.wrappText}>
            <Box dangerouslySetInnerHTML={{ __html: content }} />
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" className={classes.containerItems}>
        <Grid container spacing={2} alignItems="stretch">
          {items &&
            items.map((item, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={index}
                  className={classes.itemBox}
                >
                  <CardGama iconUrl={item.iconUrl} text={item.text} />
                </Grid>
              )
            })}
        </Grid>
      </Container>
    </section>
  )
}

export default TwoColumnsAndHighlightedItems
