import { Box, Grid, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React from 'react'
import useStyles from './styles'
import CarouselProductLines, {
  CarouselProductLinesProps
} from './CarouselProductLines'

export type ProductLinesProps = {
  overTitle?: string
  title?: string
} & CarouselProductLinesProps

const ProductLines = ({
  overTitle = '',
  title = '',
  items
}: ProductLinesProps) => {
  const classes = useStyles()
  return (
    <section className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <Typography variant="overline">
              {overTitle && (
                <Box pb={1} dangerouslySetInnerHTML={{ __html: overTitle }} />
              )}
            </Typography>
            <Typography variant="h2">
              <Box dangerouslySetInnerHTML={{ __html: title }} />
            </Typography>
          </Grid>
        </Grid>

        <CarouselProductLines items={items} />
      </Container>
    </section>
  )
}

export default ProductLines
