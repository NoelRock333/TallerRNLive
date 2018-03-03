import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

class Login extends React.Component {
  render() {
    return (
      <View style={styles.loginWrapper}>
        <Text style={{ color: 'purple' }}>Login</Text>
        <View>
          <Text>Usuario</Text>
          <TextInput style={styles.textInput}/>

          <Text>Contraseña</Text>
          <TextInput style={styles.textInput}/>
          <Button title="Entrar" onPress={this.props.navegar} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loginWrapper: {
    paddingTop: 20,
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  textInput: {
    backgroundColor: 'gray',
    padding: 10
  }
})

export default Login;