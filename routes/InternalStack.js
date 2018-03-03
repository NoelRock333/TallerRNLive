import { DrawerNavigator } from 'react-navigation';
import Home from '../components/Home';
import Drawer from '../components/shared/Drawer';

const InternalStack = DrawerNavigator({
  Home: {
    screen: Home
  }
}, {
  contentComponent: Drawer
})

export default InternalStack;