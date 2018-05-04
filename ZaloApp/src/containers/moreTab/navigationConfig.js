import { StackNavigator } from 'react-navigation';
import Dummy from '../../scenes/dummyScreen';
import MoreComponent from '../../components/more/moreComponent';

const MoreTab = StackNavigator({
    message: { screen: MoreComponent }
}, {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
)

export default MoreTab