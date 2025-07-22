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

export type ProductCTaProps = {
  padOne: string
  padTwo: string
  padThree: string
  link: string
}

const ProductCTa = ({ padOne, padTwo, padThree, link }: ProductCTaProps) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMoreThenMd = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <section className={classes.root}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          alignItems="center"
          className={classes.container}
        >
          <Grid item xs={12} md={5}>
            <Typography variant="h4">
              <Box dangerouslySetInnerHTML={{ __html: padOne }} />
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
            <Box py={2} textAlign="right">
              <Typography
                variant="subtitle2"
                dangerouslySetInnerHTML={{ __html: padThree }}
              />
            </Box>
          </Grid>
          <Grid item xs={4} md={1} container direction="row-reverse">
            <Box
              textAlign={isMoreThenMd ? 'text-align' : 'text-left'}
              color="common.white"
            >
              <a href={link}>
                <IconButton
                  color="inherit"
                  aria-label="upload picture"
                  component="div"
                  className={classes.button}
                >
                  <CallMadeIcon />
                </IconButton>
              </a>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default ProductCTa
