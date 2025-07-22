import React from 'react'
import Slider from 'react-slick'
import clsx from 'clsx'
import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import Container from '@material-ui/core/Container'
import useStyles from './styles'
import { settingsCarousel } from './settingsCarousel'
import Item, { ItemProps } from './Item'
import ItemAlternative from './ItemAlternative'

type TauSectionProps = {
  anchor?: string
  foo?: string
  overTitle?: string
  title?: string
  primaryText?: string
  secondaryText?: string
  items?: ItemProps[]
  styleSection?: React.CSSProperties
  aditionalContent?: React.ReactNode
  addLineUpMd?: boolean
  backgroundImageUrlMobile?: string
  backgroundPositionMobile?: string
  backgroundImageUrlDesktop?: string
  backgroundPositionDesktop?: string
}

const TauSection = ({
  anchor = '#',
  items,
  primaryText = '',
  secondaryText = '',
  styleSection,
  aditionalContent,
  addLineUpMd = false,
  overTitle,
  title = '',
  backgroundImageUrlMobile,
  backgroundPositionMobile,
  backgroundImageUrlDesktop,
  backgroundPositionDesktop
}: TauSectionProps) => {
  const classes = useStyles({
    backgroundImageUrlMobile,
    backgroundPositionMobile,
    backgroundImageUrlDesktop,
    backgroundPositionDesktop
  })
  const theme = useTheme()
  const isMoreThenMd = useMediaQuery(theme.breakpoints.up('md'))
  const classesSection = clsx({
    [classes.root]: true,
    [classes.addLineUpMd]: addLineUpMd
  })
  return (
    <section className={classesSection} id={anchor} style={styleSection}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {overTitle && (
              <Typography variant="overline">
                <Box dangerouslySetInnerHTML={{ __html: overTitle }} mb={1} />
              </Typography>
            )}
            {title && (
              <Typography variant="h2">
                <Box
                  fontWeight="fontWeightMedium"
                  dangerouslySetInnerHTML={{ __html: title }}
                  pb={1}
                />
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} className={classes.itemPrimaryText}>
            <Box
              fontWeight="fontWeightMedium"
              dangerouslySetInnerHTML={{ __html: primaryText }}
              className={classes.primaryText}
            />
          </Grid>
          <Grid item xs={12}>
            {!isMoreThenMd && (
              <Slider {...settingsCarousel} className={classes.slider}>
                {items &&
                  items.map((item, index) => {
                    return <Item {...item} key={index} />
                  })}
              </Slider>
            )}

            {isMoreThenMd && (
              <Grid container spacing={2}>
                <Grid item md={8}>
                  {items && items[0] && <ItemAlternative {...items[0]} />}
                </Grid>
                <Grid item md={4}>
                  {items && items[1] && (
                    <Box>
                      <ItemAlternative {...items[1]} />
                    </Box>
                  )}
                  {items && items[2] && (
                    <Box mt={2}>
                      <ItemAlternative {...items[2]} />
                    </Box>
                  )}
                </Grid>
              </Grid>
            )}
          </Grid>
          <Grid item xs={12} className={classes.itemSecondaryText}>
            <Box
              dangerouslySetInnerHTML={{ __html: secondaryText }}
              className={classes.secondaryText}
            />
          </Grid>
        </Grid>
      </Container>
      {aditionalContent}
    </section>
  )
}

export default TauSection
