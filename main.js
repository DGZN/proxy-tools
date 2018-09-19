const request = require('request')
class ProxyTools {

	constructor(url, params ={}) {
		super();
		this.url = url;
		this.method = params.method || 'GET';
	}

	static isAlive(url, cb) {
		return new Promise((resolve, reject) => {
			request(url,  (err, res) => {
				return err ? reject(err) : resolve(res)
	    });
		})
	}

}

module.exports = ProxyTools
