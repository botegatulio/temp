import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

type Type = {
  backgroundColor?: string
  backgroundImageUrlMobile?: string
  backgroundImageUrlDesktop?: string
  backgroundPositionDesktop?: string
}

const useStyles = makeStyles<Theme, Type>((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: ({ backgroundColor = '' }) => backgroundColor,
      padding: theme.spacing(4, 0),
      [theme.breakpoints.up('md')]: {
        backgroundRepeat: 'no-repeat',
        backgroundImage: ({ backgroundImageUrlDesktop = '' }) =>
          `url(${backgroundImageUrlDesktop})`,
        backgroundPosition: ({ backgroundPositionDesktop = '' }) =>
          backgroundPositionDesktop
      }
    },
    container: {
      padding: theme.spacing(0, 2),
      paddingBottom: theme.spacing(3)
    },
    subText: {
      '& p': {
        marginTop: 0
      },
      [theme.breakpoints.up('md')]: {
        columnCount: 2,
        columnGap: theme.spacing(5),
        marginTop: theme.spacing(2)
      }
    }
  })
)

export default useStyles
