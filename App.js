import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import Home from './components/Home'
import Login from './components/Login'

export default class App extends Component {
  state = {
    showHome: false
  };

  navegar = () => {
    this.setState({
      showHome: true
    });
  }

  render() {
    const { showHome } = this.state;
    if (showHome == true) {
      return <Home />
    } else {
      return <Login navegar={this.navegar} />
    }
  }
}
