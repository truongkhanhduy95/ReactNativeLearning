import { StackNavigator } from 'react-navigation';
import Dummy from '../../scenes/dummyScreen';
import NewsFeedComponent from '../../components/newsfeed/newsfeedComponent';

const NewsFeedTab = StackNavigator({
    message: { screen: NewsFeedComponent }
}, {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
)

export default NewsFeedTab