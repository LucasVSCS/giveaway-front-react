import { makeStyles } from '@material-ui/core/styles'

const FormStyle = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  }
}))

export default FormStyle
