const URL = 'https://zaloapp-service.herokuapp.com/api';

const User = '/users';
const Login = '/login';
const Status = '/statuses';
const Contact = '/contacts';

exports.ServiceConfig = {
    UserService: URL + User,
    LoginService: URL + Login,
    StatusService: URL + Status,
    ContactService: URL + Contact
}
