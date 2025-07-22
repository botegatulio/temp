import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

type Type = {
  backgroundImageUrlMobile?: string
  backgroundPositionMobile?: string
  backgroundImageUrlDesktop?: string
  backgroundPositionDesktop?: string
}

const useStyles = makeStyles<Theme, Type>((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4, 0),
      backgroundRepeat: 'no-repeat',
      backgroundImage: ({ backgroundImageUrlMobile = '' }) =>
        `url(${backgroundImageUrlMobile})`,
      backgroundPosition: ({ backgroundPositionMobile = '' }) =>
        backgroundPositionMobile,
      [theme.breakpoints.up('md')]: {
        backgroundImage: ({ backgroundImageUrlDesktop = '' }) =>
          `url(${backgroundImageUrlDesktop})`,
        backgroundPosition: ({ backgroundPositionDesktop = '' }) =>
          backgroundPositionDesktop
      }
    },
    addLineUpMd: {
      [theme.breakpoints.up('md')]: {
        position: 'relative',
        '&:before': {
          position: 'absolute',
          top: 0,
          left: 0,
          content: '""',
          width: '40%',
          height: 10,
          backgroundColor: '#e03936',
          zIndex: 2
        }
      }
    },
    slider: {
      margin: theme.spacing(0, -2),
      paddingBottom: theme.spacing(6),
      '& .slick-dots': {
        bottom: 0
      },
      '& .slick-dots li button:before': {
        content: '""',
        border: '3px solid #2e2e2e',
        borderRadius: '10px',
        width: theme.spacing(2),
        height: theme.spacing(2)
      },
      '& .slick-dots li.slick-active button:before': {
        backgroundColor: '#2e2e2e'
      }
    },
    primaryText: {
      fontSize: theme.typography.body1.fontSize,
      '& p': {
        margin: 0
      }
    },
    secondaryText: {
      fontSize: theme.typography.body1.fontSize,
      [theme.breakpoints.up('md')]: {
        columnCount: 2,
        columnGap: theme.spacing(4)
      }
    },
    itemPrimaryText: {
      [theme.breakpoints.up('md')]: {
        order: 8
      }
    },
    itemSecondaryText: {
      '& p': {
        marginTop: 0
      },
      [theme.breakpoints.up('md')]: {
        order: 9
      }
    }
  })
)

export default useStyles
