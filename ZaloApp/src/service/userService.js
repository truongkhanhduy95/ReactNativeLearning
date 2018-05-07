
export const userService = {
    login: login,
}

function login(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username == 'Test' && password == '1234')
                resolve({
                    username: 'Test',
                    age: 11,
                    sex: 'Male',
                });
            else
                reject('Wrong username or password');
        }, 2000)
    });

    
}
