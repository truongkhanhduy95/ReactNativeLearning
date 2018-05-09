import { StackNavigator } from 'react-navigation';
import ContactComponent from '../../components/contact/contactComponent';

const ContactTab = StackNavigator({
    message: { screen: ContactComponent }
}, {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
)

export default ContactTab