import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#4d4d4d',
      backgroundImage: "url('/img/bg-abstract-black.jpg')",
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(6),
      [theme.breakpoints.up(768)]: {},
      [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(4)
      },
      '& .slick-next:before, & .slick-prev:before': {
        content: "''"
      },
      '& .slick-arrow, & .slick-next': {
        color: 'white',
        zIndex: 9
      },
      '& .slick-prev': {
        left: theme.spacing(-2)
      },
      '& .slick-next': {
        right: theme.spacing(-2)
      },
      '& .slick-dots li button:before': {
        content: '""',
        color: 'white',
        border: '3px solid white',
        borderRadius: '10px',
        width: theme.spacing(2),
        height: theme.spacing(2)
      },
      '& .slick-dots li.slick-active button:before': {
        backgroundColor: 'white'
      }
    },
    containerSlider: {},
    slider: {},
    wrapperImage: {
      padding: theme.spacing(0.5),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(2)
      }
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: theme.shape.borderRadius * 2
    },
    buttonArrow: {
      minWidth: theme.spacing(4),
      padding: theme.spacing(0.5, 0)
    }
  })
)

export default useStyles
