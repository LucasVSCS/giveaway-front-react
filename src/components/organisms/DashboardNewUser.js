import React from 'react'
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

export default function DashboardNewUser () {
  const classes = DashboardPageStyle()
  const history = useHistory()

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth='lg' className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.giveawayPaper}>
              <Grid item xs={12}>
                <Typography variant='h5' gutterBottom>
                  Dados do usuário
                </Typography>
                <Paper
                  className={classes.newUserForm}
                  variant='outlined'
                  square
                  elevation={3}
                >
                  <div className={classes.root}>
                    <div>
                      <TextField
                        id='outlined-full-width'
                        label='Label'
                        style={{ margin: 8 }}
                        placeholder='Placeholder'
                        helperText='Full width!'
                        fullWidth
                        margin='normal'
                        InputLabelProps={{
                          shrink: true
                        }}
                        variant='outlined'
                      />
                      <TextField
                        label='None'
                        id='outlined-margin-none'
                        defaultValue='Default Value'
                        className={classes.textField}
                        helperText='Some important text'
                        variant='outlined'
                      />
                      <TextField
                        label='Dense'
                        id='outlined-margin-dense'
                        defaultValue='Default Value'
                        className={classes.textField}
                        helperText='Some important text'
                        margin='dense'
                        variant='outlined'
                      />
                      <TextField
                        label='Normal'
                        id='outlined-margin-normal'
                        defaultValue='Default Value'
                        className={classes.textField}
                        helperText='Some important text'
                        margin='normal'
                        variant='outlined'
                      />
                    </div>
                  </div>
                </Paper>
                <Grid item xs={12} className={classes.giveawayButtons}>
                  <Divider />
                  <ButtonGroup variant='contained' fullWidth>
                    <Button color='primary'>Cadastrar Usuário</Button>
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
    </main>
  )
}
