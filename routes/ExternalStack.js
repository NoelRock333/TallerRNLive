import { StackNavigator } from 'react-navigation';
import Login from '../components/Login';
import Home from '../components/Home';

const ExternalStack = StackNavigator({
 // Rutas 
  Login: {
    screen: Login
  },
  Home: {
    screen: Home
  }
},
{
  //Propiedades de navegacion
  headerMode: 'none'
})

export default ExternalStack;