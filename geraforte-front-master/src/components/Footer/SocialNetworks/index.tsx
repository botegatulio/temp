import IconButton from '@material-ui/core/IconButton'
import { Box } from '@material-ui/core'
import { SocialIcon } from 'react-social-icons'
import useStyles from './styles'

const commomPropsToApplyInIcons = {
  bgColor: '#ffffff',
  style: {
    width: 35,
    height: 35
  }
}

export type SocialNetWorksProps = {
  linkedinUrl: string
  instagramUrl: string
  facebookUrl: string
}

const SocialNetWorks = ({
  linkedinUrl,
  instagramUrl,
  facebookUrl
}: SocialNetWorksProps) => {
  const classes = useStyles()
  return (
    <div className={classes.socialNetWorks}>
      {linkedinUrl && (
        <IconButton component={Box}>
          <SocialIcon
            url={linkedinUrl}
            target="_blank"
            {...commomPropsToApplyInIcons}
          />
        </IconButton>
      )}
      {instagramUrl && (
        <IconButton component={Box}>
          <SocialIcon
            url={instagramUrl}
            target="_blank"
            {...commomPropsToApplyInIcons}
          />
        </IconButton>
      )}
      {facebookUrl && (
        <IconButton component={Box}>
          <SocialIcon
            url={facebookUrl}
            target="_blank"
            {...commomPropsToApplyInIcons}
          />
        </IconButton>
      )}
    </div>
  )
}

export default SocialNetWorks
