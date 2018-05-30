import { ServiceConfig } from './serviceConfig';

export const statusService = {
    getStatus: getStatus,
}

function getStatus(key) {
    const requestOptions = {
        method : 'GET',
        headers: { 'Content-Type': 'application/json' }
    }
    const url = ServiceConfig.StatusService
    console.log("abcde")
    console.log(url)
    return fetch(url, requestOptions)
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
        .catch(error => {
            return error;
        });
    
}