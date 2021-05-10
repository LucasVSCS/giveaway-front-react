import * as React from 'react'
import { DataGrid } from '@material-ui/data-grid'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'description', headerName: 'Descrição', width: 500},
  {
    field: 'occurrence_date',
    headerName: 'Data ocorrência',
    type: 'date',
    width: 170
  },
  {
    field: 'userOccurrence',
    headerName: 'Usuário',
    width: 130
  }
]

const rows = [
  {
    id: 1,
    name: 'Snow',
    occurrence_date: '15/02/2021 15:20:10',
    userOccurrence: 'Lucas Vinicius'
  }
]

export default function OccurenceTable () {
  return (
    <div style={{ width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={2} autoHeight={true} />
    </div>
  )
}
