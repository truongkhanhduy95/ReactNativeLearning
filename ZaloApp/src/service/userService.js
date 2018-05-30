import { ServiceConfig } from './serviceConfig';

export const userService = {
    login: login,
    register: register,
}

function register(username, fullname, password, phonenumber){
    const requestOptions = {
        method : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, fullname, password, phonenumber})
    }

    return fetch(ServiceConfig.UserService, requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(data => {
            //How about status??
            return data;
        })
        .catch(err => {
            return err;
        });

}

function login(username, password) {
    const requestOptions = {
        method : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }

    return fetch(ServiceConfig.LoginService, requestOptions)
        .then(response => {
            console.log(response);
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }

            return response.json();
        })
        .then(data => {
            //How about status??
            return data;
        })
        .catch(err => {
            return err;
        });
}
