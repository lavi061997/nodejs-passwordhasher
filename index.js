function printHelp() {
	console.log("index.js usage:");
	console.log("");
	console.log("--help              print this help");
	console.log("--msg={msg}   type your message");
	console.log("--method={method}   specify method for encryption");
	console.log("");
	console.log("");
}


const crypto = require('crypto');

var args = require("minimist")(process.argv.slice(2),{ string: 'msg' , string:'method'});

if ("help" in args || !args.msg || !args.method) {
	printHelp();
	process.exit(1);
}


const hash = crypto.createHmac(args.method, args.msg)
                   .digest('hex');

console.log(hash);
