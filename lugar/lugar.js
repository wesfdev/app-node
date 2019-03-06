const axios = require('axios');
const url = 'https://jsonplaceholder.typicode.com';


let users = async(type) => {

    let info = await axios.get(`${url}/${type}`);
    console.log(info.data);

}

module.exports = {
    users
}