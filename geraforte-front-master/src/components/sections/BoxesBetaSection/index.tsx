import React from 'react'
import { Container, Grid } from '@material-ui/core'
import CardGama, { CardGamaProps } from 'components/Cards/CardGama'
import useStyles from './styles'

type BoxesBetaSectionProps = {
  items: CardGamaProps[]
  backgroundDesktop?: string
}

export default function BoxesBetaSection({
  items,
  backgroundDesktop
}: BoxesBetaSectionProps) {
  const classes = useStyles({ backgroundDesktop })

  return (
    <section className={classes.root} id="boxes-beta-section">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {items &&
            items.map((item) => {
              return (
                <Grid item xs={12} md={4} key={item.title}>
                  <CardGama
                    title={item.title}
                    iconUrl={item.iconUrl}
                    text={item.text}
                  />
                </Grid>
              )
            })}
        </Grid>
      </Container>
    </section>
  )
}
