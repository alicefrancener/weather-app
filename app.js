require('dotenv').config()
const request = require('request');

const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_KEY}&query="New York"`;

request({url, json: true}, (error, response) => {
    const data = response.body;
    console.log(data.current);
})