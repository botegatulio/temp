import React from 'react'

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Link,
  Typography
} from '@material-ui/core'

import useStyles from './styles'

export type CardNiProps = {
  urlImg?: string
  title: string
  text: string
  cta?: {
    label: string
    href: string
  }
}

const CardNi = ({ urlImg, title = '', text = '', cta }: CardNiProps) => {
  const classes = useStyles()

  return (
    <Container maxWidth="lg">
      <Link href={cta?.href}>
        <Grid container className={classes.root}>
          <Grid item xs={12} md={5} className={classes.itemImage}>
            <div
              style={{ backgroundImage: `url(${urlImg})` }}
              className={classes.imageBackground}
            />
          </Grid>
          <Grid item xs={12} md={7} className={classes.itemContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Divider color="secondary" className={classes.divider} />
            <Box dangerouslySetInnerHTML={{ __html: text }} />
            {cta && (
              <Box color="common.white">
                <Button
                  color="inherit"
                  variant="text"
                  size="small"
                  style={{
                    paddingLeft: 0,
                    paddingRight: 0,
                    textDecoration: 'none'
                  }}
                  className={classes.cta}
                  disableElevation
                  disableRipple
                >
                  {cta.label}
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>
      </Link>
    </Container>
  )
}

export default CardNi
