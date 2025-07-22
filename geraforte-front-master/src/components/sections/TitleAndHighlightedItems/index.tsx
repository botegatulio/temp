import { Box, Grid, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React from 'react'
import useStyles from './styles'
import CardDelta, { CardDeltaProps } from 'components/Cards/CardDelta'

type TitleAndHighlightedItemsProps = {
  topText: string
  title: string
  items: CardDeltaProps[]
  styleSection?: React.CSSProperties
}

const TitleAndHighlightedItems = ({
  topText,
  title,
  items,
  styleSection
}: TitleAndHighlightedItemsProps) => {
  const classes = useStyles()
  return (
    <section
      className={classes.root}
      style={styleSection}
      id="two-columns-and-highlited-items"
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item md={6}>
            <Typography variant="overline">
              <Box mb={1}>{topText}</Box>
            </Typography>
            <Typography variant="h1">
              <Box dangerouslySetInnerHTML={{ __html: title }} />
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" className={classes.containerItems}>
        <Grid container spacing={2} alignItems="center">
          {items &&
            items.map((item, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={3}
                  key={index}
                  className={classes.itemBox}
                >
                  <CardDelta icon={item.icon} title={item.title} />
                </Grid>
              )
            })}
        </Grid>
      </Container>
    </section>
  )
}

export default TitleAndHighlightedItems
