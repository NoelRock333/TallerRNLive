import React, { Component } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import ExternalStack from './routes/ExternalStack';
import InternalStack from './routes/InternalStack';
import SInfo from 'react-native-sensitive-info';
import Api from './utils/api';

const options = {
  sharedPreferencesName: 'tallerRN',
  keychainService: 'tallerRN'
};

export default class App extends Component {
  state = {
    isLogued: null
  }

  componentDidMount() {
    const jwt = SInfo.getItem('jwt', options).then(value => {
      this.setState({
        isLogued: value ? true : false,
      });
    });
  }

  login = (credentials) => {
    Api.post('/user_token', credentials)
    .then(res => res.json())
    .then(data => {
      if(data && data.jwt) {
        SInfo.setItem('jwt', data.jwt, options).then(() => {
          this.setState({ isLogued: true });
        })
      }
    })
  }

  render() {
    if (this.state.isLogued) {
      return <InternalStack/>
    } else if (this.state.isLogued == null) {
      return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
        <Text>Cargando...</Text>
      </View>
    } else {
      return <ExternalStack  screenProps={{ login: this.login }}/>
    }
  }
}
