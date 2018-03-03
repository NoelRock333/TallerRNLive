import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, ImageBackground } from 'react-native';


class Login extends React.Component {
  state = {
    username: '',
    password: '', 
  }

 login = () => {
   const credentials = {
     auth: {
       email: this.state.username,
       password: this.state.password,
     }
   }

   this.props.screenProps.login(credentials);
 }

  render() {
    return (
      <View style={styles.body}>
        <ImageBackground source={require('../../assets/background.jpg')} style={styles.titleBackground}>
          <Text style={styles.title}>InstaApp</Text>
        </ImageBackground>
        <View style={styles.loginForm}>
          <TextInput
            style={styles.textInput}
            placeholder="Usuario"
            onChangeText={(text) => this.setState({ username: text }) }/>

          <TextInput
            style={styles.textInput}
            placeholder="Contraseña"
            onChangeText={(text) => this.setState({ password: text }) }/>
          <Button title="Entrar" onPress={() => this.login()} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  loginForm: {
    padding: 10,
    paddingTop: 20
  },
  textInput: {
    backgroundColor: '#FAFAFA',
    padding: 14,
    borderWidth: 1,
    borderColor: '#EBEBEB',
    marginBottom: 10,
    borderRadius: 7
  },
  titleBackground: {
    width: '100%',
    height: 180,
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30
  }
})

export default Login;