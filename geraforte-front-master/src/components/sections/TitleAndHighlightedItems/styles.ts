import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      [theme.breakpoints.up('md')]: {
        backgroundImage: 'url("/img/detalhe-titulo-torre-resfriamento.png")',
        backgroundPosition: 'calc(50% + 500px) 80px',
        backgroundRepeat: 'no-repeat'
      }
    },
    containerText: {
      paddingTop: theme.spacing(2)
    },
    wrappText: {
      '& p:first-child': {
        marginTop: 0
      },
      [theme.breakpoints.up('md')]: {
        columnCount: 2
      }
    },
    containerItems: {
      paddingTop: theme.spacing(4)
    },
    itemBox: {
      marginBottom: theme.spacing(1)
    }
  })
)

export default useStyles
