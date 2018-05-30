import { ServiceConfig } from './serviceConfig';

export const contactService = {
    getContact: getContact,
}

function getContact() {
    const requestOptions = {
        method : 'GET',
        headers: { 'Content-Type': 'application/json' }
    }
    return fetch(ServiceConfig.ContactService, requestOptions)
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