const path = require('path');
const CracoAlias = require('craco-alias');

module.exports = {
	webpack: {
		configure: (webpackConfig, { env, paths }) => {
			webpackConfig.resolve = {
				alias: {
					react: path.resolve('./node_modules/react'),
				},
				extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
			};
			return webpackConfig;
		},
	},
	babel: {
		plugins: [
			['@emotion/babel-plugin', { jsxImportSource: '@emotion/react' }],
			'babel-plugin-macros',
		],
	},
	plugins: [
		{
			plugin: CracoAlias,
			options: {
				source: 'tsconfig',
				baseUrl: './src',
				tsConfigPath: './tsconfig.paths.json',
			},
		},
	],
};
