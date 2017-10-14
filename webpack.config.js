const path = require('path');

module.exports = {
	entry: './hello.js',
	output: {
		filename: 'hello_bundle.js',
		path: path.resolve(__dirname)
	}
};
