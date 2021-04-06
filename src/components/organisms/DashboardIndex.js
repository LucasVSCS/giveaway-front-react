import React from 'react'
import DashboardPageStyle from '../../styles/DashboardPageStyle'

import clsx from 'clsx'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Title from '../atoms/Dashboard/Title'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import AddToQueueIcon from '@material-ui/icons/AddToQueue'
import UserTable from '../atoms/Dashboard/UserTable'
import OccurenceTable from '../atoms/Dashboard/OccurrenceTable'
import { Link } from 'react-router-dom'

export default function DashboardIndex () {
  const classes = DashboardPageStyle()

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth='lg' className={classes.container}>
        <Grid container spacing={3}>
          {/* Tabela de ocorrências */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>
              <Title>Últimas Ocorrências</Title>
              <OccurenceTable />
            </Paper>
          </Grid>

          {/* Painel de ações */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <Title>Ações</Title>
              <ButtonGroup
                orientation='vertical'
                color='primary'
                variant='contained'
                size='large'
                className={classes.actionButtonsGroup}
              >
                <Button
                  className={classes.actionButtons}
                  startIcon={<PersonAddIcon />}
                  component={Link}
                  to='/newUser'
                >
                  Adicionar Usuário
                </Button>
                <Button
                  className={classes.actionButtons}
                  color='secondary'
                  startIcon={<AddToQueueIcon />}
                  component={Link}
                  to='/newGiveaway'
                >
                  Gerar Sorteio
                </Button>
              </ButtonGroup>
            </Paper>
          </Grid>

          {/* Tabela de usuários */}
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Title>Usuários</Title>
              <UserTable />
            </Paper>
          </Grid>
        </Grid>
        <Box pt={4}></Box>
      </Container>
    </main>
  )
}
