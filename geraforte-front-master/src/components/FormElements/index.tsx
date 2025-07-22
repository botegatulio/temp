import { withStyles, TextField } from '@material-ui/core'

export const TextFieldCustom = withStyles({
  root: {
    '& .MuiFormLabel-root': {
      color: '#1d1d1c'
    },
    '& .MuiFilledInput-colorSecondary': {
      backgroundColor: 'white'
    },
    '& .MuiFilledInput-colorSecondary.MuiFilledInput-underline:after': {
      borderBottomColor: '#e03936'
    }
  }
})(TextField)
