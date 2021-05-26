import React, { useState } from 'react'
import DashboardPageStyle from '../../styles/DashboardPageStyle'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'
import { Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import instance from '../../apis/axios-default'
import { useSnackbar } from 'notistack'

export default function DashboardChangePassword () {
  const classes = DashboardPageStyle()
  const history = useHistory()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const [userPassword, setUserPassword] = useState({
    password: '',
    confirmPassword: ''
  })

  const [error, setError] = useState(false)

  const submit = event => {
    event.preventDefault()
    if (userPassword.password !== userPassword.confirmPassword) {
      enqueueSnackbar('Campo senha diferere da sua confirmação.', {
        variant: 'error'
      })
      setError(true)
    } else {
      instance
        .post(process.env.REACT_APP_API_URL + 'users/changePassword', userPassword)
        .then(response => {
          enqueueSnackbar('Sucesso ao alterar a senha', {
            variant: 'success'
          })
          setError(false)
          history.push('/dashboard')
        })
        .catch(error => {
          enqueueSnackbar('Erro ao alterar a senha', {
            variant: 'error'
          })
        })
    }
  }

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <form onSubmit={submit}>
        <Container maxWidth='lg' className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.giveawayPaper}>
                <Grid item xs={12}>
                  <Typography variant='h5' gutterBottom>
                    Alterar a senha
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        error={error}
                        type='password'
                        name='password'
                        label='Senha'
                        fullWidth
                        onChange={e =>
                          setUserPassword({
                            ...userPassword,
                            password: e.target.value
                          })
                        }
                        autoComplete='given-name'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        error={error}
                        type='password'
                        name='confirm-password'
                        label='Confirmar senha'
                        fullWidth
                        onChange={e =>
                          setUserPassword({
                            ...userPassword,
                            confirmPassword: e.target.value
                          })
                        }
                        autoComplete='email'
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className={classes.giveawayButtons}>
                    <Divider />
                    <ButtonGroup variant='contained' fullWidth>
                      <Button type='submit' color='primary'>
                        Alterar Senha
                      </Button>
                      <Button
                        color='default'
                        onClick={() => {
                          history.goBack()
                        }}
                      >
                        Voltar
                      </Button>
                    </ButtonGroup>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </form>
    </main>
  )
}
