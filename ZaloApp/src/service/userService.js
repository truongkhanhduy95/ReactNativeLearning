
export const userService = {
    login,
}

function login(username, password) {
    setTimeout(() => {
    if(username == 'Test' && password == '123')
        return username;
    else
        return Error('wrong');
    }, 2000);
};
