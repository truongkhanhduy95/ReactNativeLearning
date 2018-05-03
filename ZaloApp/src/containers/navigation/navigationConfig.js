import { StackNavigator } from 'react-navigation';
import Intro from '../../scenes/Intro';
import Login from '../../scenes/Login';
import PhoneCodeScreen from '../../scenes/PhoneCodeScreen';
import RegisterNameScreen from '../../scenes/RegisterNameScreen';
import RegisterPhoneScreen from '../../scenes/RegisterPhoneScreen';

const Router = StackNavigator({
    intro: { screen: Intro },
    login: { screen: Login },
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