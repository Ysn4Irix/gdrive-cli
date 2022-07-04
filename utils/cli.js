const meow = require("meow");
const meowHelp = require("cli-meow-help")

const flags = {
	path: {
		type: `string`,
		default: "",
		desc: `Path of your file to be uploaded`
	},
	share: {
		type: `boolean`,
		default: false,
		desc: `Get the uploaded file link`
	},
	config: {
		type: `boolean`,
		desc: `Edit credentials config file`
	},
	debug: {
		type: `boolean`,
		default: false,
		desc: `Print debug info`
	},
	help: {
		type: `boolean`,
		default: false,
		desc: `Print help info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	}
}

const commands = {
	upload: {
		desc: `Upload file to Google Drive`
	}
}

const helpText = meowHelp({
	name: `gdrive`,
	flags,
	commands,
	defaults: false,
})

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	allowUnknownFlags: false,
	flags
}

module.exports = meow(helpText, options)