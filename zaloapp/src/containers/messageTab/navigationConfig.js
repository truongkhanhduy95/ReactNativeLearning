import { StackNavigator } from 'react-navigation';
import Dummy from '../../scenes/dummyScreen';

const MessageTab = StackNavigator({
    message: { screen: Dummy }
}, {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
)

export default MessageTab