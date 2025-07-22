import React from 'react'

import { Box, Container, Grid, Typography } from '@material-ui/core'
import useStyles from './styles'

type SimpleGraphsProps = {
  sectionId: string
  items?: {
    imageUrl: string
    title: string
    text: string
  }[]
}

const SimpleGraphs = ({ sectionId = '', items = [] }: SimpleGraphsProps) => {
  const classes = useStyles()
  return (
    <>
      <section className={classes.root} id={sectionId}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {items.map((item, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  key={index}
                  className={classes.item}
                >
                  <Box
                    component="div"
                    textAlign="center"
                    className={classes.wrapperImage}
                  >
                    <img className={classes.image} src={item.imageUrl} />
                  </Box>
                  <div className={classes.body}>
                    <Typography variant="h4" component="div">
                      <Box color="common.white" textAlign="center">
                        {item.title}
                      </Box>
                    </Typography>
                    <Typography variant="body2" component="div">
                      <Box
                        component="div"
                        color="common.white"
                        textAlign="center"
                        className={classes.text}
                      >
                        {item.text}
                      </Box>
                    </Typography>
                  </div>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default SimpleGraphs
