export const fetchUsers = async () => (await(await fetch('https://reqres.in/api/users?page=2', {method: 'get', "no-cors": true, /* pass authToken here */})).json()).data;