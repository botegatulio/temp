import { Box, Button, Grid, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React from 'react'
import useStyles from './styles'
import Item, { ItemsProps } from './Item'

type DeltaSectionProps = {
  overlineText: string
  title: string
  text: string
  items?: ItemsProps[]
  styleSection?: React.CSSProperties
  backgroundColor?: string
  backgroundImageUrlDesktop?: string
  backgroundPositionDesktop?: string
  idSection?: string
  readMore?: {
    label: string
    href: string
  }
}

const DeltaSection = ({
  overlineText,
  title,
  text,
  items,
  styleSection = {},
  backgroundColor,
  backgroundImageUrlDesktop,
  backgroundPositionDesktop,
  readMore,
  idSection = 'delta-section'
}: DeltaSectionProps) => {
  const classes = useStyles({
    backgroundColor,
    backgroundImageUrlDesktop,
    backgroundPositionDesktop
  })
  return (
    <section className={classes.root} id={idSection} style={styleSection}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          alignItems="center"
          className={classes.container}
        >
          <Grid item xs={12} md={4}>
            <Typography variant="overline">
              <Box dangerouslySetInnerHTML={{ __html: overlineText }} mb={1} />
            </Typography>
            <Typography variant="h2">
              <Box dangerouslySetInnerHTML={{ __html: title }} />
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.subText}>
            <Typography variant="subtitle2" component="span">
              <Box dangerouslySetInnerHTML={{ __html: text }} />
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {items &&
            items.map((item, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={`${item.title}-${index}`}
                >
                  <Item
                    icon={item.icon}
                    title={item.title}
                    number={item.number}
                  />
                </Grid>
              )
            })}
        </Grid>
        {readMore && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                disableElevation
                href={readMore.href}
              >
                {readMore.label}
              </Button>
            </Grid>
          </Grid>
        )}
      </Container>
    </section>
  )
}

export default DeltaSection
