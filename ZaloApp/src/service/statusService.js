import { ServiceConfig } from './serviceConfig';
import { callApi } from './baseService'

export const StatusService = {
    createStatus,
    getStatus
}

function createStatus(owner, time_create, content, image, likes, comments) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({ owner, time_create, content, image, likes, comments })
    }
    return callApi(ServiceConfig.StatusService, requestOptions);
}

function getStatus(key) {
    const requestOptions = {
        method: 'GET',
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