import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Login from './components/Login';
import ChatScreen from './components/ChatScreen';
import { Route } from 'react-router-dom';

export default class App extends Component {

  render() {
    return (
      <>
        <NavBar/>

        <Route 
          exact path='/' 
          render={props => <Login {...props}/>}
        />

        <Route 
          exact path='/chat'
          render={props => <ChatScreen {...props} />}
        />
      </>
    )
  }
}
