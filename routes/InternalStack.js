import { DrawerNavigator } from 'react-navigation';
import Home from '../components/Home';
import Comments from '../components/Comments';
import Drawer from '../components/shared/Drawer';

const InternalStack = DrawerNavigator({
  Home: {
    screen: Home
  },
  Comments: {
    screen: Comments
  }
}, {
  contentComponent: Drawer
})

export default InternalStack;