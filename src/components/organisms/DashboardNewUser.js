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

export default function DashboardNewUser () {
  const classes = DashboardPageStyle()
  const history = useHistory()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    user_type: 'C',
    giveaway_permission: 'S',
    beginning_period: new Date(),
    end_period: new Date()
  })

  const submit = event => {
    event.preventDefault()

    instance
      .post(process.env.REACT_APP_API_URL + 'users/addUser', userData)
      .then(response => {
        enqueueSnackbar('Sucesso ao cadastrar o usuário', {
          variant: 'success'
        })
        history.push('/dashboard')
      })
      .catch(error => {
        enqueueSnackbar('Erro ao cadastrar o usuário', {
          variant: 'error'
        })
      })
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
                    Dados do usuário
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        name='name'
                        label='Nome'
                        fullWidth
                        onChange={e =>
                          setUserData({ ...userData, name: e.target.value })
                        }
                        autoComplete='given-name'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        type='email'
                        name='email'
                        label='Email'
                        fullWidth
                        onChange={e =>
                          setUserData({ ...userData, email: e.target.value })
                        }
                        autoComplete='email'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputLabel>Tipo de usuário</InputLabel>
                      <Select
                        name='user_type'
                        fullWidth
                        value={userData['user_type']}
                        onChange={e =>
                          setUserData({
                            ...userData,
                            user_type: e.target.value
                          })
                        }
                      >
                        <MenuItem value={'A'}>Administrador</MenuItem>
                        <MenuItem value={'C'}>Usuário Comum</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputLabel>Permissão p/ realizar sorteios</InputLabel>
                      <Select
                        name='giveaway_permission'
                        fullWidth
                        value={userData['giveaway_permission']}
                        onChange={e =>
                          setUserData({
                            ...userData,
                            giveaway_permission: e.target.value
                          })
                        }
                      >
                        <MenuItem value={'S'}>Sim</MenuItem>
                        <MenuItem value={'N'}>Não</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          fullWidth
                          disableToolbar
                          variant='inline'
                          format='dd/MM/yyyy'
                          margin='normal'
                          label='Inicio do período de permissão'
                          name='beginning_period'
                          value={userData['beginning_period']}
                          onChange={e =>
                            setUserData({
                              ...userData,
                              beginning_period: e
                            })
                          }
                        />
                      </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          fullWidth
                          disableToolbar
                          variant='inline'
                          format='dd/MM/yyyy'
                          margin='normal'
                          label='Fim do período de permissão'
                          name='end_period'
                          value={userData['end_period']}
                          onChange={e =>
                            setUserData({
                              ...userData,
                              end_period: e
                            })
                          }
                        />
                      </MuiPickersUtilsProvider>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className={classes.giveawayButtons}>
                    <Divider />
                    <ButtonGroup variant='contained' fullWidth>
                      <Button type='submit' color='primary'>
                        Cadastrar Usuário
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
