const axios = require('axios');

exports.handler = async (event) => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/users';
        console.log('calling jsonplaceholder');
        const axiosResponse = await axios.get(url);
        console.log('response: ' + JSON.stringify(axiosResponse.data));
        return {
            statusCode: 200,
            headers: { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*" 
            },
            body: JSON.stringify(axiosResponse.data)
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