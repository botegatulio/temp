import { Box, Grid, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React from 'react'
import useStyles from './styles'
import clsx from 'clsx'

type TwoColumnsTextSectionProps = {
  topText?: string
  title: string
  content: string
  aditionalContent?: React.ReactNode
  styleSection?: React.CSSProperties
  addLineUpMd?: boolean
  backgroundDesktop?: string
}

const TwoColumnsTextSection = ({
  topText,
  title,
  content,
  aditionalContent,
  styleSection,
  addLineUpMd = false,
  backgroundDesktop
}: TwoColumnsTextSectionProps) => {
  const classes = useStyles({ backgroundDesktop })

  const classesSection = clsx({
    [classes.root]: true,
    [classes.addLineUpMd]: addLineUpMd
  })

  return (
    <section className={classesSection} style={styleSection}>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item md={6}>
            {topText && (
              <Typography variant="overline">
                <Box dangerouslySetInnerHTML={{ __html: topText }} mb={1} />
              </Typography>
            )}
            <Typography variant="h1">
              <Box
                fontWeight="fontWeightRegular"
                dangerouslySetInnerHTML={{ __html: title }}
              />
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

      {aditionalContent}
    </section>
  )
}

export default TwoColumnsTextSection
