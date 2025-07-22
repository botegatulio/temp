import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#E0DFE0',
      padding: theme.spacing(4, 0),
      [theme.breakpoints.up('md')]: {
        backgroundColor: '#E0DFE0',
        background:
          "url('/img/bg-section-final.jpg') center bottom no-repeat, url('/img/detail-section-final-line-remote.png') calc(50% + 250px) 45px no-repeat"
      }
    },
    containerBottom: {
      paddingTop: theme.spacing(2)
    },
    subText: {
      '& p': {
        marginTop: 0
      },
      [theme.breakpoints.up('md')]: {
        columnCount: 2,
        columnGap: theme.spacing(4),
        marginTop: theme.spacing(2)
      }
    }
  })
)

export default useStyles
