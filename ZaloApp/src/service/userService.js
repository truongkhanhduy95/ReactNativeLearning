
export const userService = {
    login: login,
    register: register,
}

function register(username, fullname, password){

}

function login(username, password) {
    const requestOptions = {
        method : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }

    return fetch('http://localhost:3000/api/login', requestOptions)
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
