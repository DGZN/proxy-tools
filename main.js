class ProxyTools {

	static isAlive(url, cb) {
		return new Promise((resolve, reject) => {
			require('request')(url,  (err, res) => {
				return err ? reject(err) : resolve(res)
	    });
		})
	}

}

module.exports = ProxyTools
