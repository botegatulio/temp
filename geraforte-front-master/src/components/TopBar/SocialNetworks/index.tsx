import { useTranslation } from 'next-i18next'
import IconButton from '@material-ui/core/IconButton'
import { Box } from '@material-ui/core'
import { SocialIcon } from 'react-social-icons'
import useStyles from './styles'

const commomPropsToApplyInIcons = {
  bgColor: '#bcc4cb',
  style: {
    width: 25,
    height: 25
  }
}

const SocialNetWorks = () => {
  const classes = useStyles()
  const { t } = useTranslation('common')

  return (
    <div className={classes.sideMenuShortCuts}>
      <IconButton component={Box}>
        <SocialIcon
          url={t('social_networks_link.linkedin')}
          {...commomPropsToApplyInIcons}
        />
      </IconButton>
      <IconButton component={Box}>
        <SocialIcon
          url={t('social_networks_link.instagram')}
          {...commomPropsToApplyInIcons}
        />
      </IconButton>
      <IconButton component={Box}>
        <SocialIcon
          url={t('social_networks_link.facebook')}
          {...commomPropsToApplyInIcons}
        />
      </IconButton>
    </div>
  )
}

export default SocialNetWorks
