import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  textField: {
    display: 'flex',
    marginLeft: '12%',
    width: '70%'
  },
  button: {    
    margin: theme.spacing()
  }
})

const Form = props => (
  <form onSubmit={props.getWeather}>
    <TextField
      className={props.classes.textField}
      label='City Name'
      margin='normal'
      name='city'
      type='search'
      variant='outlined'
      InputLabelProps={{
        required: true,
        shrink: true
      }}
    />
    <TextField
      className={props.classes.textField}
      label='Country Code'
      margin='normal'
      name='country'
      type='search'
      variant='outlined'
      InputLabelProps={{
        required: true,
        shrink: true
      }}
    />
    <Button
      className={props.classes.button}
      color='primary' size='large'
      type='submit'
      variant='contained'
    >
      Submit
    </Button>
  </form>
)

export default withStyles(styles)(Form)
