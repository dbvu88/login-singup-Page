import React, { Component } from 'react';
import fire from './Config/fire'
import Login from './Login'
import Home from './Home'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: {},
    }
  }

  componentDidMount() {
    this.authListener()

  }

  // listen to the auth-state-change
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      // console.log(user)
      if (user) {
        this.setState({ user })
        // localStorage.setItem('user', user.uid)
      } else {
        this.setState({ user: null})
        // localStorage.removeItem('users')
      }
    })
  }

  render() {
    return (
      <div className="App"> 
      {this.state.user ? (<Home/>) : (<Login/>)}
      </div>
    );
  }
}

export default App;
