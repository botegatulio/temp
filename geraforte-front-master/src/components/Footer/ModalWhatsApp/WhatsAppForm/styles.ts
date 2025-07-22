import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      marginTop: theme.spacing(1),
      [theme.breakpoints.up('md')]: {
        marginTop: theme.spacing(2)
      }
    },
    textField: {},
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    paper: {
      marginTop: 130,
      backgroundColor: '#F2F2F2',
      padding: '32px 16px',
      position: 'relative',
      '&:before': {
        position: 'absolute',
        top: 0,
        left: 0,
        content: '""',
        width: '66.66%',
        height: 10,
        backgroundColor: '#D93533'
      },
      '&:after': {
        position: 'absolute',
        top: 0,
        right: 0,
        content: '""',
        width: '33.33%',
        height: 10,
        backgroundColor: '#FA4E43'
      }
    },
    button: {
      backgroundColor: '#20B038',
      '&:hover': {
        backgroundColor: '#387542'
      }
    }
  })
)
