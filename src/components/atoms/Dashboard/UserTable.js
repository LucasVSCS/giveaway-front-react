import React, { Component } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import instance from '../../../apis/axios-default'
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
    instance
      .get('users/getUsers')
      .then(response => {
        this.setState({ apiResponse: response.data })
      })
      .catch(error => {
        console.log(error)
      })
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
