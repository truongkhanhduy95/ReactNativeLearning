import { StackNavigator } from 'react-navigation';
import MessageComponent from '../../components/message/messageComponent';

const MessageTab = StackNavigator({
    message: { screen: MessageComponent }
}, {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
)

export default MessageTab