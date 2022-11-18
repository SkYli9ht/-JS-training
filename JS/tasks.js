const logins = ['m4ngoDoge', 'kiwida38t', 'poly1scute', 'aj4xth3m4n'];
const findLogin = function (allLogins, loginToFind) {
    for (const login of allLogins) {
        if (login === loginToFind) {
            return 'User ${loginToFind} found';
        }
    }
    return 'User ${loginToFind} is not found';
}

console.log(findLogin(logins, 'avocad3r'));
console.log(findLogin(logins, 'kiwida38t'));
console.log(findLogin(logins, 'jam4'));
console.log(findLogin(logins, 'poly1scute'));