import React, { useState } from 'react'
import clsx from 'clsx'
import Container from '@material-ui/core/Container'
import useStyles from './styles'
import { Box, Button, Grid } from '@material-ui/core'
import TextTwoColumnWithBanner, {
  TextTwoColumnWithBannerProps
} from '../TextTwoColumnWithBanner'

type Item = {
  label: string
} & TextTwoColumnWithBannerProps

export type TextTwoColumnWithBannerTabProps = {
  items?: Item[]
}

const TextTwoColumnWithBannerTab = ({
  items
}: TextTwoColumnWithBannerTabProps) => {
  const classes = useStyles()
  const [activeItem, setActiveItem] = useState(0)
  return (
    <section className={classes.root} id="text-two-column-with-banner-tab">
      <Container maxWidth="lg">
        <Grid container spacing={2} className={classes.containerButtons}>
          {items &&
            items.map((item, index) => {
              return (
                <Grid item xs={6} md={4} lg={3} key={index}>
                  <Box
                    minHeight="100%"
                    display="flex"
                    className={clsx({
                      [classes.itemButtonActive]: index === activeItem
                    })}
                  >
                    <Button
                      className={classes.buttonLabel}
                      fullWidth
                      size="small"
                      disableElevation
                      variant={index === activeItem ? 'contained' : 'outlined'}
                      color={index === activeItem ? 'secondary' : 'primary'}
                      onClick={() => {
                        setActiveItem(index)
                      }}
                    >
                      {item.label}
                    </Button>
                  </Box>
                </Grid>
              )
            })}
        </Grid>
      </Container>

      {items && (
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Box>
              <TextTwoColumnWithBanner
                text={items[activeItem].text}
                textBanner={items[activeItem].textBanner}
                linkCta={items[activeItem].linkCta}
                labelCta={items[activeItem].labelCta}
                backgroundImageUrl={items[activeItem].backgroundImageUrl}
              />
            </Box>
          </Grid>
        </Container>
      )}
    </section>
  )
}

export default TextTwoColumnWithBannerTab
