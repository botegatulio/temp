import React from 'react'
import { Box, Button, Grid, Paper, Typography } from '@material-ui/core'
import useStyles from './styles'

export type ItemsProps = {
  icon: string
  title: string
  number: string
}

const Item = ({ icon, title, number }: ItemsProps) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.itemWrapper}>
      <div className={classes.containerLeft}>
        <Grid container direction="column" className={classes.itemIndicator}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<img src={icon} className={classes.imageIcon} />}
              className={classes.iconButton}
            ></Button>
          </Grid>
          <Grid item>
            <Box
              bgcolor="#e03936"
              color="primary.contrastText"
              component="div"
              className={classes.number}
            >
              {number}
            </Box>
          </Grid>
        </Grid>
      </div>

      <Grid item xs={12} className={classes.itemContent}>
        <Paper elevation={10} className={classes.paper}>
          <Typography
            variant="body1"
            style={{ fontSize: 14 }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Item
