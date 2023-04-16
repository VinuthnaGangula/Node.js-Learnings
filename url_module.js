var url = require('url');

var address = 'http://localhost:8080/home?name=vinuthna&year=2023';

var query = url.parse(address, true);

console.log('Query: ', query);