const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'name', headerName: 'Nome', width: 150 },
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
  { field: 'user_type', headerName: 'Tipo de usuário', width: 160 }
]

export default columns
