import { StackNavigator } from 'react-navigation';
import Intro from '../../scenes/Intro';
import Login from '../../scenes/Login';
import TabBarNavigation from '../tabBar/tabBarNavigation';
import PhoneCodeScreen from '../../scenes/PhoneCodeScreen';
import RegisterNameScreen from '../../scenes/RegisterNameScreen';
import RegisterPhoneScreen from '../../scenes/RegisterPhoneScreen';

const Router = StackNavigator({
    intro: { screen: Intro },
    login: { screen: Login },
    tabBar: { screen: TabBarNavigation },
    phoneCode: { screen: PhoneCodeScreen},
    registerName: { screen: RegisterNameScreen},
    registerPhone: { screen: RegisterPhoneScreen}
},
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);

export default Router