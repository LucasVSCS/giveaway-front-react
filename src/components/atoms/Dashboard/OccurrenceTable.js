import React, { Component } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import instance from '../../../apis/axios-default'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'description', headerName: 'Descrição', width: 500 },
  {
    field: 'occurrence_date',
    headerName: 'Data ocorrência',
    type: 'date',
    width: 170
  },
  {
    field: 'name',
    headerName: 'Usuário',
    width: 130
  }
]

export default class OccurenceTable extends Component {
  constructor (props) {
    super(props)

    this.state = {
      apiResponse: []
    }
  }

  componentDidMount () {
    this.callApi()
  }

  callApi () {
    instance
      .get('occurrences/getOccurrences')
      .then(response => {
        this.setState({ apiResponse: response.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    return (
      <div style={{ width: '100%' }}>
        <DataGrid
          rows={this.state.apiResponse}
          columns={columns}
          pageSize={2}
          checkboxSelection={false}
          disableSelectionOnClick={true}
          autoHeight={true}
        />
      </div>
    )
  }
}
