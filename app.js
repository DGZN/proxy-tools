const ProxyTools = require('./main')

ProxyTools.isAlive('http://google.com').then((res) => {
 console.log(`[\u2714] CONNECTED`);
}).catch(err => console.error(err.message))
