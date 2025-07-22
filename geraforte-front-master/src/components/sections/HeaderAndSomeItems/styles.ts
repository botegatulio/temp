import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

type Props = {
  backgroundRepeat?: string
  backgroundColor?: string
  backgroundImage?: string
  backgroundPosition?: string
  backgroundImageDesktop?: string
  backgroundPositionDesktop?: string
}

const useStyles = makeStyles<Theme, Props>((theme: Theme) => {
  return createStyles({
    root: {
      backgroundRepeat: ({ backgroundRepeat }) => backgroundRepeat,
      backgroundColor: ({ backgroundColor }) => backgroundColor,
      padding: theme.spacing(4, 0),
      backgroundImage: ({ backgroundImage }) => `url('${backgroundImage}')`,
      backgroundPosition: ({ backgroundPosition }) => backgroundPosition,
      [theme.breakpoints.up('md')]: {
        backgroundRepeat: 'no-repeat',
        backgroundImage: ({ backgroundImageDesktop }) =>
          `url('${backgroundImageDesktop}')`,
        backgroundPosition: ({ backgroundPositionDesktop }) =>
          backgroundPositionDesktop
      }
    }
  })
})

export default useStyles
