const shell = require('shelljs');
const fs = require('fs');

var myServer1 = '';
var myServer2 = '';

const PATH = process.cwd();

function writeLogs() {
	setInterval(() => {
		shell.exec(PATH + '/ping.sh');
	}, 1000);
}

function readLogServer1() {
	setInterval(() => {
		try {
			myServer1 = fs.readFileSync(PATH + '/dataLogs/lastLogServer1.log', 'utf8');
		} catch (err) {
			console.error(err);
		}
	}, 1000);
}

function readLogServer2() {
	setInterval(() => {
		try {
			myServer2 = fs.readFileSync(PATH + '/dataLogs/lastLogServer2.log', 'utf8');
		} catch (err) {
			console.error(err);
		}
	}, 1000);
}

const postLogs = (req, res) => {
	const myReq = req.body;
	console.log(myReq);
	res.json({
		status_s1:myServer1,
		status_s2:myServer2
	})
};

const postRestart = (req, res) => {
	const myReq = req.body;
	console.log('restart server...', myReq);
	res.json({
		msg:'Restarting Server...'
	})
};

writeLogs();
readLogServer1();
readLogServer2();

 module.exports = {
	 postLogs,
	 postRestart
	}