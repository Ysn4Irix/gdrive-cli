#!/usr/bin/env node

/**
 * gdrive-cli
 * a nodejs cli for uploading files directly to google drive using drive API
 *
 * @author Ysn4Irix <https://ysnirix.me>
 */

const init = require("./utils/init");
const cli = require("./utils/cli");
const log = require("./utils/log");
const gdrive = require("./utils/drive")
const questions = require("./utils/questions")

const input = cli.input;
const flags = cli.flags;

(async () => {
	if (input.length === 0 || !flags) {
		init();
		cli.showHelp(0);
	}

	flags.help && cli.showHelp(0)

	if (flags.config) {
		console.log();
		console.log("Set your credentials:");
		console.log();
		await questions();
	}

	if (input.includes("upload")) {
		console.log();
		gdrive.upload(flags.path, flags.share);
	}

	flags.debug && log(flags)
})();