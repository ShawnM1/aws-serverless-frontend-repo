import * as axios from 'axios';

exports.handler = async (event) => {
    try {
        
        console.log('calling jsonplaceholder');
        const users = await getUsers();
        console.log('response: ', JSON.stringify(users));
        
        return {
            statusCode: 200,
            headers: { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: users
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*" 
            },
            body: { error }
        };
    }
}

const getUsers = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const users = await axios.get(url);
    return users;
}