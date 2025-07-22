import {
  Box,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React from 'react'
import useStyles from './styles'
import CallMadeIcon from '@material-ui/icons/CallMade'

export type CtaTwoProps = {
  padOne: string
  padTwo: string
  padThree: string
  link: string
}

const CtaTwo = ({ padOne, padTwo, padThree, link }: CtaTwoProps) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMoreThenMd = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <section className={classes.root} id="cta-two">
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          alignItems="center"
          className={classes.container}
        >
          <Grid item xs={12} md={5}>
            <Typography variant="h4">
              <Box
                fontWeight="fontWeightRegular"
                dangerouslySetInnerHTML={{ __html: padOne }}
              />
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box py={1}>
              <Typography
                variant="subtitle2"
                dangerouslySetInnerHTML={{ __html: padTwo }}
              />
            </Box>
          </Grid>
          <Grid item xs={8} md={3}>
            <Box py={2}>
              <Typography
                variant="subtitle2"
                dangerouslySetInnerHTML={{ __html: padThree }}
                align={isMoreThenMd ? 'right' : 'left'}
              />
            </Box>
          </Grid>
          <Grid item xs={4} md={1} container direction="row-reverse">
            <Box textAlign="text-right">
              <a href={link}>
                <IconButton
                  color="inherit"
                  aria-label="upload picture"
                  component="div"
                  className={classes.button}
                >
                  <CallMadeIcon color="primary" />
                </IconButton>
              </a>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default CtaTwo
