import { StackNavigator } from 'react-navigation';
import Intro from '../../scenes/Intro';
import Login from '../../scenes/Login';
import TabBarNavigation from '../tabBar/tabBarNavigation';
import PhoneCodeScreen from '../../scenes/PhoneCodeScreen';
import RegisterNameScreen from '../../scenes/RegisterNameScreen';
import RegisterPhoneScreen from '../../scenes/RegisterPhoneScreen';
import NotificationComponent from '../../components/notification/notificationComponent';
import NewsFeedDetailComponent from '../../components/newsfeedDetail/newsfeedDetailComponent';
import ChatComponent from '../../components/chat/chatComponent';
import ProfileScreen from '../../scenes/Profile';
import SettingsScreen from '../../components/settings/settingsComponent'
// import BaseHeader from '../../components/BaseHeaderComponent';

// const EnhancedLoginScreen = BaseHeader(Login, 'Login');
// const EnhancedRegisterName = BaseHeader(RegisterNameScreen, 'Name');
// const EnhancedRegisterPhone = BaseHeader(RegisterPhoneScreen, 'Phone number');

const Router = StackNavigator({
    intro: { screen: Intro },
    login: { screen: Login },
    tabBar: { screen: TabBarNavigation },
    phoneCode: { screen: PhoneCodeScreen},
    chat: { screen: ChatComponent },
    registerName: { screen: RegisterNameScreen},
    registerPhone: { screen: RegisterPhoneScreen},
    notification: { screen: NotificationComponent },
    profile: { screen: ProfileScreen },
    newsfeedDetail: { screen: NewsFeedDetailComponent },
    settings: { screen: SettingsScreen}
},
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);

export default Router