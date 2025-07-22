import { Box, Grid, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React from 'react'
import useStyles from './styles'
import CardTextWithIconTop, {
  CardTextWithIconTopProps
} from 'components/Cards/CardTextWithIconTop'

type ZetaProps = {
  overlineText?: string
  title?: string
  text?: string
  items?: CardTextWithIconTopProps[]
  aditionalContent?: React.ReactNode
}

const Zeta = ({
  overlineText,
  title,
  text,
  items,
  aditionalContent
}: ZetaProps) => {
  const classes = useStyles()

  const renderAditionalContent = () => {
    if (aditionalContent) {
      return aditionalContent
    }
  }
  return (
    <section className={classes.root} id="delta-section">
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            {overlineText && (
              <Typography variant="overline">
                <Box
                  dangerouslySetInnerHTML={{ __html: overlineText }}
                  mb={1}
                />
              </Typography>
            )}
            {title && (
              <Typography variant="h2">
                <Box dangerouslySetInnerHTML={{ __html: title }} mb={2} />
              </Typography>
            )}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {items &&
            items.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} md={3} key={`--${index}`}>
                  <Box pt={6} px={1} style={{ height: '100%' }}>
                    <CardTextWithIconTop icon={item.icon} text={item.text} />
                  </Box>
                </Grid>
              )
            })}
        </Grid>
        <Grid
          container
          spacing={2}
          alignItems="center"
          className={classes.containerBottom}
        >
          <Grid item xs={12} className={classes.subText}>
            {text && (
              <Typography variant="body1" component="span">
                <Box dangerouslySetInnerHTML={{ __html: text }} />
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>
      {renderAditionalContent()}
    </section>
  )
}

export default Zeta
