
import { createStackNavigator } from 'react-navigation';
import MainNavigator from './BottomNavigator';

export default createStackNavigator(
    {
        Screen: {
            screen: MainNavigator,
        }
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
   
);
