import { Button, Link, withStyles } from '@material-ui/core'

export const ButtonColorWhite = withStyles({
  root: {
    color: 'white',
    fontWeight: 'normal',
    '&.MuiButton-containedSizeSmall': {
      minWidth: '170px',
      paddingTop: '8px',
      paddingBottom: '8px'
    }
  }
})(Button)

export const LinkWithoutDecoration = withStyles({
  root: {
    '&:hover': {
      textDecoration: 'none'
    }
  }
})(Link)
