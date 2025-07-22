import Container from '@material-ui/core/Container'
import React from 'react'
import useStyles from './styles'
import TabsWithBackgroundImage, {
  TabsWithBackgroundImageProps
} from '../../TabsWithBackgroundImage'
import { Box, Grid, Typography } from '@material-ui/core'

type ApplicationsProjectProps = {
  styleSection?: React.CSSProperties
  overline: string
  title: string
} & TabsWithBackgroundImageProps

const Cases = ({
  styleSection,
  overline,
  title,
  items
}: ApplicationsProjectProps) => {
  const classes = useStyles()
  return (
    <section className={classes.root} style={styleSection}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} style={{ paddingBottom: 32 }}>
            <Typography variant="overline" component="div">
              <Box component="div" mb={1}>
                {overline}
              </Box>
            </Typography>
            <Typography variant="h1">
              <Box
                component="span"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </Typography>
          </Grid>
        </Grid>
        <TabsWithBackgroundImage items={items} />
      </Container>
    </section>
  )
}

export default Cases
