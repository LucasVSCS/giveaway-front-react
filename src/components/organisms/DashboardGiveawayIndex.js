import React from 'react'
import DashboardPageStyle from '../../styles/DashboardPageStyle'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'
import InstagramComments from '../molecules/CommentsBox/InstagramComments'

export default function DashboardGiveawayIndex () {
  const classes = DashboardPageStyle()

  const Comments = {
    1: {
      userName: 'Lucas',
      comment:
        'Cupidatat mollit et consectetur sunt veniam do anim ad ullamco commodo exercitation.'
    },
    2: {
      userName: 'Alana',
      comment:
        'Cupidatat mollit et consectetur sunt veniam do anim ad ullamco commodo exercitation.'
    },
    3: {
      userName: 'Dinalva',
      comment:
        'Cupidatat mollit et consectetur sunt veniam do anim ad ullamco commodo exercitation.'
    },
    4: {
      userName: 'Robson',
      comment:
        'Cupidatat mollit et consectetur sunt veniam do anim ad ullamco commodo exercitation.'
    }
  }

  const imageLink =
    'https://instagram.fssa2-1.fna.fbcdn.net/v/t51.2885-15/e35/166628079_840332766559129_3335318644472053794_n.jpg?tp=1&_nc_ht=instagram.fssa2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=t5U92hNVRKAAX_yIIIj&edm=AABBvjUAAAAA&ccb=7-4&oh=dd54c58cf317eaab03e0435d97521447&oe=60908C34&_nc_sid=83d603'

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth='lg' className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.giveawayPaper}>
              <Grid item xs={6}>
                <Paper className={classes.giveawayPaperImage}>
                  <img className={classes.giveawayImage} src={imageLink} />
                </Paper>
                <Grid item xs={12} className={classes.giveawayButtons}>
                  <TextField
                    id='link-sorteio'
                    label='Link do sorteio'
                    variant='outlined'
                    fullWidth
                    className={classes.inputGiveaway}
                  />

                  <Divider />

                  <ButtonGroup variant='contained' fullWidth>
                    <Button color='primary'>Realizar sorteio</Button>
                    <Button color='secondary' disabled>
                      Gerar planilha
                    </Button>
                    <Button color='default' disabled>
                      Pausar sorteio
                    </Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.giveawayPaperImage}>
                  <InstagramComments />
                </Paper>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>
  )
}
