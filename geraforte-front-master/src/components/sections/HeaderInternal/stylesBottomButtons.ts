import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles<Theme>((theme: Theme) => {
  return createStyles({
    headerListButtons: {
      display: 'flex',
      paddingBottom: theme.spacing(1),
      [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(5)
      }
    },
    headerButtons: {
      fontSize: 10,
      fontWeight: 'normal',
      textAlign: 'center',
      flexGrow: 1,
      '& + & ': {
        marginLeft: 4
      },
      '&.MuiButton-containedSecondary': {
        backgroundColor: '#e03936',
        '&:before': {
          content: '""',
          position: 'absolute',
          bottom: -10,
          width: 0,
          height: 0,
          borderStyle: 'solid',
          borderWidth: '10px 10px 0 10px',
          borderColor: '#e03936 transparent transparent transparent'
        }
      },
      '&.MuiButton-outlined': {
        borderColor: '#ffffff',
        color: '#ffffff'
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: 12,
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
      }
    }
  })
})

export default useStyles
