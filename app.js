const ProxyTools = require('./main')

const isAlive = ProxyTools.isAlive('http://bing.com').then((res) => {
 console.log(`SUCCESS [${res.statusCode}]`);
}).catch(err => console.error(err.message))
