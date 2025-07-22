import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4, 0),
      [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(6)
      }
    },
    containerButtons: {
      paddingBottom: theme.spacing(4)
    },
    itemButtonActive: {
      position: 'relative',
      '&:before': {
        content: '""',
        position: 'absolute',
        left: '50%',
        bottom: -12,
        width: 0,
        height: 0,
        borderLeft: '12px solid transparent',
        borderRight: ' 12px solid transparent',
        borderTop: `12px solid #e03936`,
        transform: 'translate(-50%)',
        transition: theme.transitions.create(
          ['background-color', 'transform'],
          {
            duration: theme.transitions.duration.standard
          }
        )
      },
      '&:hover:before': {
        borderTopColor: '#B20002'
      }
    },
    buttonLabel: {
      display: 'block',
      textAlign: 'center',
      flex: 1,
      minHeight: '100%',
      padding: theme.spacing(1, 0.5)
    }
  })
)

export default useStyles
