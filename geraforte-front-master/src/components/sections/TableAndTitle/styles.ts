import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4, 0),
      backgroundImage: `url("/img/bg-table.jpg")`,
      backgroundSize: 'cover'
    },
    paper: {
      borderRadius: theme.shape.borderRadius * 2,
      padding: theme.spacing(0, 1),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(0, 2)
      }
    }
  })
)

export default useStyles
