import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from './screens/Login.js';
import Home from './screens/Home.js';
import About from './screens/About.js';
import Weather from './screens/Weather.js';

const AppNavigator = createStackNavigator(
    {
    Login: { screen: Login },
    Home: { screen: Home },
    About: {screen: About},
    Weather: {screen: Weather},
    },
    {
    initialRouteName: 'Login',
    }
    );
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;