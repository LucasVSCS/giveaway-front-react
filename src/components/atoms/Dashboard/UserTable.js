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
      .get(process.env.REACT_APP_API_URL + 'users/getUsers', {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true,
        credentials: 'include'
      })
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
