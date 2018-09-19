class ProxyTools {

	static isAlive(url, cb) {
		return new Promise((resolve, reject) => {
			require('request')(url, {timeout: 5000}, (err, res) => {
				return err ? reject(err) : resolve(res)
	    });
		})
	}

	static import(file) {
		const stream = require('stream')
		const hosts = []
		var instream = require('fs').createReadStream(file);
		var outstream = new stream;
		var rl = require('readline').createInterface(instream, outstream);
		rl.on('line', function(line) {
			if( !/^#/.exec(line) ) {
				hosts.push({ target: line })
			}
		}.bind(this))
		.on('close', function () {
			hosts.map(function(host, i) {
				this.isAlive(host.target).then(function(res) {
					hosts[i].status = true
					console.log(`[\u2714] ${host.target}`)
				}).catch(err => {})
			}.bind(this))
		}.bind(this))
	}
}

module.exports = ProxyTools
