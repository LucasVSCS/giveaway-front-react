import React from 'react'
import EditIcon from '@material-ui/icons/Edit'
import Box from '@material-ui/core/Box'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'

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
          aria-label='edit'
          onClick={() => {
            console.log(params.row)
          }}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          aria-label='delete'
          onClick={() => {
            console.log(params.row.id)
          }}
        >
          <DeleteForeverIcon />
        </IconButton>
      </Box>
    )
  }
]

export default columns
