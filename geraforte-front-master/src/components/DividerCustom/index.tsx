import { Divider, withStyles } from '@material-ui/core'

export const SmallDivider = withStyles({
  root: {
    maxWidth: '64px',
    backgroundColor: '#e03936',
    height: 3
  }
})(Divider)
