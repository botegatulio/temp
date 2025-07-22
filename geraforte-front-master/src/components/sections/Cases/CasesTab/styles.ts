import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    tabs: {},
    indicator: {
      display: 'none'
    },
    appBar: {
      [theme.breakpoints.up('md')]: {},
      '& .MuiButtonBase-root': {
        backgroundColor: 'transparent',
        color: 'white',
        border: '1px solid #f5f5f5',
        margin: '0 10px',
        fontSize: '12px'
      },
      '& .MuiButtonBase-root.Mui-selected': {
        backgroundColor: '#f5f5f5',
        color: '#2e2e2e'
      },
      '& .MuiTabScrollButton-root': {
        width: '20px'
      }
    },
    image: {
      width: '100%',
      height: 'auto',
      margin: '0 auto',
      maxHeight: '580px',
      minHeight: 200,
      [theme.breakpoints.up('md')]: {
        minHeight: 580
      }
    }
  })
)

export default useStyles
