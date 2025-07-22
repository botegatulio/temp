import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

type Type = {
  backgroundImageUrlMobile: string
  backgroundImageUrlDesktop: string
}

const useStyles = makeStyles<Theme, Type>((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4, 0),
      paddingBottom: theme.spacing(55),
      backgroundColor: '#242424',
      color: theme.palette.common.white,
      overflow: 'hidden',
      backgroundImage: ({ backgroundImageUrlMobile }) =>
        `url(${backgroundImageUrlMobile})`,
      backgroundPosition: 'center bottom',
      backgroundRepeat: 'no-repeat',
      [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(8),
        backgroundImage: ({ backgroundImageUrlDesktop }) =>
          `url(${backgroundImageUrlDesktop})`,
        padding: theme.spacing(8, 0)
      }
    }
  })
)

export default useStyles
