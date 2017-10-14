const path = require('path');

module.exports = {
	entry: {
        './hello': './hello.js',
        './calc': './calc.js'
    },
	output: {
		filename: '[name]_bundle.js',
		path: __dirname
	}
};
