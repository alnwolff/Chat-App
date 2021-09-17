import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Login from './components/Login';
import ChatScreen from './components/ChatScreen';
import { Route, Redirect } from 'react-router-dom';
import './App.css'

export default class App extends Component {

  state = {
    user: ''
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <>
        <NavBar user={this.state.user} setUser={this.setUser}/>

        <Route 
          exact path='/' 
          render={props => <Login user={this.state.user} setUser={this.setUser} {...props}/>}
        />

        <Route 
          exact path='/chat'
          render={props => {
            return this.state.user ? <ChatScreen user={this.state.user} {...props}/> : <Redirect to='/'/>
          }}
        />
      </>
    )
  }
}
