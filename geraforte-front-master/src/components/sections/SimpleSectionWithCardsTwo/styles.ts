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
      backgroundImage: ({ backgroundImageUrlMobile }) =>
        `url(${backgroundImageUrlMobile})`,
      [theme.breakpoints.up('md')]: {
        backgroundImage: ({ backgroundImageUrlDesktop }) =>
          `url(${backgroundImageUrlDesktop})`
      }
    },
    item: {
      marginBottom: theme.spacing(2)
    }
  })
)

export default useStyles
