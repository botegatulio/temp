import React from 'react'
import { Box, Button, Grid, Typography } from '@material-ui/core'
import useStyles from './styles'
import clsx from 'clsx'

export type TabsWithBackgroundImageProps = {
  items?: {
    label: string
    title?: string
    content?: string
    backgroundImageUrl?: string
    iconUrl?: string
    link?: string
    buttonLabel?: string
  }[]
}
const TabsWithBackgroundImage = ({ items }: TabsWithBackgroundImageProps) => {
  const classes = useStyles()
  const [activeTab, setActiveTab] = React.useState(0)

  const handleChange = (
    event: React.ChangeEvent<unknown>,
    newValue: number
  ) => {
    setActiveTab(newValue)
  }

  return (
    <div className={classes.root} id="teste">
      <Grid container spacing={0}>
        <Grid item xs={12} md={3} className={classes.columnButtons}>
          <div className={classes.containerButtons}>
            {items &&
              items.map((item, index) => {
                return (
                  <div
                    key={`label-${index}`}
                    className={clsx({
                      [classes.button]: true,
                      [classes.buttonActive]: index == activeTab
                    })}
                    onClick={(e) => handleChange(e, index)}
                  >
                    <div className={classes.buttonIcon}>
                      <img src={item.iconUrl} className={classes.iconImage} />
                    </div>
                    <div
                      className={classes.buttonLabel}
                      dangerouslySetInnerHTML={{ __html: item.label }}
                    />
                  </div>
                )
              })}
          </div>
        </Grid>
        <Grid item xs={12} md={9} className={classes.columnBackground}>
          {items &&
            items.map((item, index) => {
              return (
                <div
                  key={`content-${index}`}
                  className={clsx({
                    [classes.columnContent]: true,
                    [classes.columnContentActive]: index === activeTab
                  })}
                  style={{
                    backgroundImage: `url('${item.backgroundImageUrl}')`
                  }}
                >
                  <Grid
                    container
                    className={classes.containerTextContentAndButton}
                  >
                    <Grid item xs={12} md={6}>
                      {item.title && (
                        <Typography variant="h2" className={classes.title}>
                          <Box
                            pb={3}
                            component="span"
                            dangerouslySetInnerHTML={{ __html: item.title }}
                          />
                        </Typography>
                      )}
                      {item.content && (
                        <Typography variant="body1" component="div">
                          <Box
                            pt={2}
                            pb={3}
                            component="div"
                            dangerouslySetInnerHTML={{ __html: item.content }}
                          />
                        </Typography>
                      )}
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      className={classes.columnContentButton}
                    >
                      {item.buttonLabel && (
                        <Button
                          color="secondary"
                          variant="contained"
                          size="small"
                          disableElevation
                          className={classes.buttonCTA}
                          href={item.link}
                        >
                          {item.buttonLabel}
                        </Button>
                      )}
                    </Grid>
                  </Grid>
                </div>
              )
            })}
        </Grid>
      </Grid>
    </div>
  )
}

export default TabsWithBackgroundImage
