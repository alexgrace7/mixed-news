import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from './screens/Login.js';
import Home from './screens/Home.js';

const AppNavigator = createStackNavigator(
    {
    Login: { screen: Login },
    Home: { screen: Home },
    },
    {
    initialRouteName: 'Login',
    }
    );
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;