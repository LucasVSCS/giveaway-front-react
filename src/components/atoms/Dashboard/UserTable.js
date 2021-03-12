import React, { Component } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import axios from 'axios'
import userColumns from './UserTableColumns'

export default class UserTable extends Component {
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
    axios
      .get('http://localhost:9000/users/getUsers')
      .then(response => {
        this.setState({ apiResponse: response.data })
      })
      .catch(err => console.log(err))
  }

  render () {
    const columns = userColumns

    return (
      <div style={{ width: '100%' }}>
        <DataGrid
          rows={this.state.apiResponse}
          columns={columns}
          pageSize={3}
          autoHeight={true}
        />
      </div>
    )
  }
}
