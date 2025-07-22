import React from 'react'
import { Box, Grid, useMediaQuery, useTheme } from '@material-ui/core'
import { SmallDivider } from 'components/DividerCustom'
import { SocialIcon } from 'react-social-icons'
import { ButtonBase } from '@material-ui/core'
import useStyles from './styles'

const getCommomPropsToApplyInIcons = (isMoreThenMd: boolean) => {
  return {
    fgColor: '#3a3a3a',
    bgColor: 'transparent',
    width: isMoreThenMd ? 40 : 10,
    height: isMoreThenMd ? 40 : 10
  }
}

type SocialNetWorksBannerProps = {
  text?: string
  backgroundImageUrl?: string
  linkedinUrl?: string
  twitterUrl?: string
  youtubeUrl?: string
  instagramUrl?: string
  facebookUrl?: string
}

const SocialNetWorksBanner = ({
  text = '',
  backgroundImageUrl = '',
  linkedinUrl,
  twitterUrl,
  youtubeUrl,
  instagramUrl,
  facebookUrl
}: SocialNetWorksBannerProps) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMoreThenMd = useMediaQuery(theme.breakpoints.up('md'))

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (event: any) => {
    window.open(event.currentTarget.value, '_blank')
    return false
  }
  return (
    <Grid
      container
      alignItems="center"
      spacing={2}
      className={classes.container}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`
      }}
    >
      <Grid item xs={12} md={4}>
        <SmallDivider />
        <Box
          className={classes.text}
          color="common.white"
          dangerouslySetInnerHTML={{ __html: text }}
          pt={1}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <div className={classes.sideMenuShortCuts}>
          {linkedinUrl && (
            <ButtonBase
              className={classes.button}
              onClick={handleClick}
              value={linkedinUrl}
            >
              <SocialIcon
                network="linkedin"
                href={linkedinUrl}
                {...getCommomPropsToApplyInIcons(isMoreThenMd)}
              />
            </ButtonBase>
          )}
          {twitterUrl && (
            <ButtonBase
              className={classes.button}
              onClick={handleClick}
              value={twitterUrl}
            >
              <SocialIcon
                network="twitter"
                href={twitterUrl}
                target="_blank"
                {...getCommomPropsToApplyInIcons(isMoreThenMd)}
              />
            </ButtonBase>
          )}

          {youtubeUrl && (
            <ButtonBase
              className={classes.button}
              onClick={handleClick}
              value={youtubeUrl}
            >
              <SocialIcon
                url={youtubeUrl}
                target="_blank"
                {...getCommomPropsToApplyInIcons(isMoreThenMd)}
              />
            </ButtonBase>
          )}

          {instagramUrl && (
            <ButtonBase
              className={classes.button}
              onClick={handleClick}
              value={instagramUrl}
            >
              <SocialIcon
                url={instagramUrl}
                target="_blank"
                {...getCommomPropsToApplyInIcons(isMoreThenMd)}
              />
            </ButtonBase>
          )}

          {facebookUrl && (
            <ButtonBase
              className={classes.button}
              onClick={handleClick}
              value={facebookUrl}
            >
              <SocialIcon
                url={facebookUrl}
                target="_blank"
                {...getCommomPropsToApplyInIcons(isMoreThenMd)}
              />
            </ButtonBase>
          )}
        </div>
      </Grid>
    </Grid>
  )
}

export default SocialNetWorksBanner
