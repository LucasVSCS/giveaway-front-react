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
    'https://instagram.fssa2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/155226524_264039491799360_3721210818114900914_n.jpg?tp=1&_nc_ht=instagram.fssa2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=l8Y5-f4E5uoAX_O9Kh4&oh=7c508c0025765f0759c7fc9bfb1c7182&oe=6065BC38'

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
