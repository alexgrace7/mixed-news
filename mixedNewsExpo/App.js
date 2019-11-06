
import React, { Component } from 'react';
import AppNavigator from './AppNavigator.js';
import * as firebase from 'firebase';

// Initialize Firebase


export default class App extends Component {

  render() 
  {
    return (
      <AppNavigator/>
    );
  }
}