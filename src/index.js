import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import 'fontsource-roboto'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { SnackbarProvider } from 'notistack';

// Default Pages
import LoginPage from './pages/Login'
import DashboardPage from './pages/Dashboard'
import DashboardGiveaway from './pages/DashboardGiveaway'
import NewUser from './pages/NewUser'
import ChangePassword from './pages/ChangePassword'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#d50000' },
    secondary: { main: '#ff5722' }
  }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <SnackbarProvider>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={LoginPage} />
        <Route path='/dashboard' exact={true} component={DashboardPage} />
        <Route path='/newGiveaway' exact={true} component={DashboardGiveaway} />
        <Route path='/newUser' exact={true} component={NewUser} />
        <Route path='/changePassword' exact={true} component={ChangePassword} />
      </Switch>
    </BrowserRouter>
    </SnackbarProvider>
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
