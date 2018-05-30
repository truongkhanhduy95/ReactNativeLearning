import { ServiceConfig } from './serviceConfig'
const URL = 'https://zaloapp-service.herokuapp.com/api';

export function callApi(endpoint, options = { method: 'get' }, token = null) {

    const url = endpoint;
    const requestOptions = {
        ...options,
        headers: { 'Content-Type': 'application/json' },
        
    };
    return fetch(url, requestOptions)
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