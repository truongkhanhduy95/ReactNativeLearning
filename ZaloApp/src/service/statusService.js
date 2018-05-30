import { ServiceConfig } from './serviceConfig';
import { callApi } from './baseService'

export const StatusService = {
    createStatus
}

function createStatus(owner, time_create, content, image, likes, comments) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({ owner, time_create, content, image, likes, comments })
    }
    return callApi(ServiceConfig.StatusService, requestOptions);
}