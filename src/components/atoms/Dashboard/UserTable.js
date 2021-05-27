import React, { Component } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import instance from '../../../apis/axios-default'
import Box from '@material-ui/core/Box'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import SnackBar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

function Alert (props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}
export default class UserTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      apiResponse: [],
      isModalOpen: false,
      isSnackbarOpen: false,
      snackbarMessage: '',
      snackbarColor: '',
      idUser: null
    }
  }

  componentDidMount () {
    this.callApi()
  }

  callApi () {
    instance
      .get('users/getUsers')
      .then(response => {
        this.setState({ apiResponse: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleClose = () => {
    this.setState({ isModalOpen: false })
  }

  handleOpen = id => {
    this.setState({ idUser: id, isModalOpen: true })
  }

  deleteUser = () => {
    instance
      .post('users/deleteUser', { userId: this.state.idUser })
      .then(response => {
        this.setState({
          apiResponse: this.state.apiResponse.filter(userData => {
            return userData.id !== this.state.idUser
          }),
          isModalOpen: false,
          isSnackbarOpen: true,
          snackbarMessage: 'Sucesso ao deletar o usuário',
          snackbarColor: 'success'
        })

        setInterval(() => {
          this.setState({
            isSnackbarOpen: false
          })
        }, 3500)
      })
      .catch(error => {
        this.setState({
          isModalOpen: false,
          isSnackbarOpen: true,
          snackbarMessage: 'Erro ao deletar o usuário',
          snackbarColor: 'error'
        })
      })
  }

  render () {
    const columns = [
      { field: 'id', headerName: 'ID', width: 80 },
      { field: 'name', headerName: 'Nome', width: 220 },
      {
        field: 'beginning_period',
        headerName: 'Inicio periodo de uso',
        type: 'date',
        width: 190
      },
      {
        field: 'end_period',
        headerName: 'Fim periodo de uso',
        type: 'date',
        width: 180
      },
      {
        field: 'giveaway_permission',
        headerName: 'Permissão de sorteio',
        width: 190
      },
      { field: 'user_type', headerName: 'Tipo de usuário', width: 160 },
      {
        field: 'actions',
        headerAlign: 'center',
        headerName: 'Ações',
        width: 150,
        renderCell: params => (
          <Box mx='auto'>
            <IconButton
              aria-label='delete'
              onClick={() => {
                this.handleOpen(params.row.id)
              }}
            >
              <DeleteForeverIcon />
            </IconButton>
          </Box>
        )
      }
    ]

    return (
      <div style={{ width: '100%' }}>
        <SnackBar
          open={this.state.isSnackbarOpen}
          message={this.state.snackbarMessage}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
          <Alert severity={this.state.snackbarColor}>
            {this.state.snackbarMessage}
          </Alert>
        </SnackBar>
        <Dialog
          open={this.state.isModalOpen}
          onClose={this.handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>
            {'Confirmação de exclusão de usuário'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              Tem certeza que desejar deletar o usuário selecionado?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={e => {
                this.handleClose()
              }}
              color='default'
            >
              Voltar
            </Button>
            <Button
              onClick={e => {
                this.deleteUser()
              }}
              color='primary'
              autoFocus
            >
              Deletar
            </Button>
          </DialogActions>
        </Dialog>
        <DataGrid
          rows={this.state.apiResponse}
          columns={columns}
          pageSize={3}
          checkboxSelection={false}
          disableSelectionOnClick={true}
          autoHeight={true}
        />
      </div>
    )
  }
}
