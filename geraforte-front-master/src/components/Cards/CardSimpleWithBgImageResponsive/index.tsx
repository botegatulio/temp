import React from 'react'
import { Button, Divider, Typography } from '@material-ui/core'
import useStyles from './styles'

export type CardSimpleWithBgImageResponsiveProps = {
  title?: string
  description: string
  backgroundImageMobile?: string
  backgroundImageDesktop?: string
  labelCta?: string
  linkCta?: string
}

const CardSimpleWithBgImageResponsive = ({
  title,
  description,
  backgroundImageMobile = '',
  backgroundImageDesktop = '',
  labelCta,
  linkCta
}: CardSimpleWithBgImageResponsiveProps) => {
  const classes = useStyles()
  return (
    <div className={classes.card}>
      <a href={linkCta}>
        <picture>
          <source srcSet={backgroundImageDesktop} media="(min-width: 960px)" />
          <img
            src={backgroundImageMobile}
            className={classes.image}
            alt="example"
          />
        </picture>
        <div className={classes.wrapperText}>
          {title && (
            <>
              <Typography
                gutterBottom
                className={classes.title}
                component="h2"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <Divider className={classes.divider} />
            </>
          )}
          {description && (
            <Typography
              className={classes.description}
              component="p"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
          {labelCta && (
            <Button size="small" color="secondary" variant="contained">
              {labelCta}
            </Button>
          )}
        </div>
      </a>
    </div>
  )
}

export default CardSimpleWithBgImageResponsive
