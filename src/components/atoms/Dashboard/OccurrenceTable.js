import * as React from 'react'
import { DataGrid } from '@material-ui/data-grid'

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'name', headerName: 'Nome', width: 150 },
  {
    field: 'endUsePeriod',
    headerName: 'Fim periodo de uso',
    type: 'date',
    width: 150
  },
  {
    field: 'giveawayPermission',
    headerName: 'Permissão de sorteio',
    width: 130
  },
  { field: 'remove', headerName: 'Excluir', width: 150 }
]

const rows = [
  {
    id: 1,
    name: 'Snow',
    endUsePeriod: '10-10-2019',
    giveawayPermission: 'Sim',
    remove: 'Teste'
  },
  {
    id: 2,
    name: 'Snow',
    endUsePeriod: '9-10-2019',
    giveawayPermission: 'Sim',
    remove: 'Teste'
  }
]

export default function OccurenceTable () {
  return (
    <div style={{ width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={2} autoHeight={true} />
    </div>
  )
}
