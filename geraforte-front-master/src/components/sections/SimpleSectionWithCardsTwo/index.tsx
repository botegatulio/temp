import React from 'react'
import { Grid } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import useStyles from './styles'
import CardSimpleWithBgImageResponsive, {
  CardSimpleWithBgImageResponsiveProps
} from 'components/Cards/CardSimpleWithBgImageResponsive'

type SimpleSectionWithCardsProps = {
  items?: CardSimpleWithBgImageResponsiveProps[]
}

const SimpleSectionWithCardsTwo = ({ items }: SimpleSectionWithCardsProps) => {
  const classes = useStyles({
    backgroundImageUrlMobile: '/img/bg-table.jpg',
    backgroundImageUrlDesktop: '/img/abstract-bg-desktop.webp'
  })
  return (
    <section className={classes.root} id="text-and-image-section">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {items &&
            items.map((item, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={`${item.title}-${index}`}
                  className={classes.item}
                >
                  <CardSimpleWithBgImageResponsive {...item} />
                </Grid>
              )
            })}
        </Grid>
      </Container>
    </section>
  )
}

export default SimpleSectionWithCardsTwo
