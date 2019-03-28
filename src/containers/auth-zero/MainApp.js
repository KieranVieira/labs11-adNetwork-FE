import React, { Component } from 'react';

class MainApp extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {

    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {

    return (
      <div>
        <button
          onClick={this.goTo.bind(this, 'dashboard')}
        >
          Dashboard
        </button>

        <button onClick={() => {
          localStorage.setItem('acct_type', "advertiser")
        }}>
          Advertiser
        </button>

        <button onClick={() => {
          localStorage.setItem('acct_type', "affiliate")
        }}>
          Affiliate
        </button>
        
        {!localStorage.id_token &&
          <button
            onClick={this.login.bind(this)}
          >
            Log In
          </button>}

        {localStorage.id_token &&
          <button
            onClick={this.logout.bind(this)}
          >
            Log Out
          </button>}
      </div>
    );
  }
}

export default MainApp;
