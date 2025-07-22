import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import clsx from 'clsx'
import {
  Box,
  Button,
  Divider,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core'

import useStyles from './styles'
import { ButtonColorWhite } from 'components/ButtonCustom'

export type CardOmegaProps = {
  urlImg?: string
  urlImgDesktop?: string
  title: string
  text: string
  marginTop?: number
  halfWidthFromMd?: boolean
  readMoreAtMobile?: boolean
  cta?: {
    label: string
    href: string
  }
}

const CardOmega = ({
  urlImg,
  urlImgDesktop,
  title = '',
  text = '',
  marginTop = 0,
  cta,
  halfWidthFromMd = false,
  readMoreAtMobile = false
}: CardOmegaProps) => {
  const classes = useStyles()
  const [visibilityText, setVisibilityText] = useState(false)

  const sectionStyle = clsx({
    [classes.root]: true,
    [classes.rootHalfWidth]: halfWidthFromMd
  })

  const imageStyle = clsx({
    [classes.image]: true,
    [classes.imageHalfWidthFromMd]: halfWidthFromMd
  })

  const contentStyle = clsx({
    [classes.content]: true,
    [classes.contentHalfWidthFromMd]: halfWidthFromMd
  })

  const wrapperTextStyle = clsx({
    [classes.wrapperText]: true,
    [classes.wrapperTextVisibible]: !readMoreAtMobile || visibilityText
  })

  const theme = useTheme()
  const isMoreThenMd = useMediaQuery(theme.breakpoints.up('md'))
  const { t } = useTranslation('common')
  return (
    <div className={sectionStyle} style={{ marginTop: marginTop }}>
      {urlImg && (
        <img
          src={isMoreThenMd ? urlImgDesktop : urlImg}
          alt="example"
          className={imageStyle}
        />
      )}

      <div className={contentStyle}>
        <Typography
          gutterBottom
          variant="h4"
          component="h2"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <Divider color="secondary" className={classes.divider} />
        {readMoreAtMobile && !visibilityText && (
          <Box>
            <Button
              className={classes.wrapperReadMore}
              color="inherit"
              variant="text"
              size="small"
              disableElevation
              onClick={() => setVisibilityText(true)}
            >
              {t('read_more')}
            </Button>
          </Box>
        )}

        <Typography
          variant="body1"
          component="div"
          dangerouslySetInnerHTML={{ __html: text }}
          className={wrapperTextStyle}
        />

        {cta && (
          <Box pt={2}>
            <ButtonColorWhite
              color="secondary"
              variant="contained"
              href={cta.href}
              size="small"
              disableElevation
            >
              {cta.label}
            </ButtonColorWhite>
          </Box>
        )}
      </div>
    </div>
  )
}

export default CardOmega
