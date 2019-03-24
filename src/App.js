import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Dashboard from './containers/dashboard/Dashboard.js';
import Login from './containers/login/Login.js';
import Register from './containers/register/Register.js';
import AdServer from './containers/ad-server/AdServer.js'
import MainApp from './containers/Auth-Zero/MainApp';
import Callback from './containers/Auth-Zero/Callback/Callback';
import Profile from './containers/Auth-Zero/Profile/Profile';
import Home from './containers/Auth-Zero/Home/Home';
import Auth from './containers/Auth-Zero/Auth/Auth';




const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0A88DC',
    },
    secondary: {
      main: '#F1F1F1',
    },
  },
  typography: { useNextVariants: true },
});


const auth = new Auth();


const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Route path="/" render={props => <MainApp auth={auth} {...props} />} />
          <Route path="/home" render={props => <Home auth={auth} {...props} />} />
          <Route
            path="/profile"
            render={props =>
              !auth.isAuthenticated()
                ? <Redirect to="/home" />
                : <Profile auth={auth} {...props} />}
          />
          <Route
            path="/callback"
            render={props => {
              handleAuthentication(props);
              return <Callback {...props} />;
            }}
          />



          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/ad/:id" component={AdServer} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
