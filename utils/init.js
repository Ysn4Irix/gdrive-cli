const welcome = require('cli-welcome')
const pkg = require('./../package.json')
const unhandled = require('cli-handle-unhandled')

module.exports = () => {
	unhandled()
	welcome({
		title: `gdrive`,
		tagLine: `by Ysn4Irix`,
		description: pkg.description,
		version: pkg.version,
		bgColor: '#00FF00',
		color: '#FFFFFF',
		bold: true
	})
}