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
	res.json({
		status_s1:myServer1,
		status_s2:myServer2
	})
};

const postRestart = (req, res) => {
	console.log(req.body.button)
	if(req.body.button == 'btnRestartServer1') {
		shell.exec(PATH + '/restartInstancia1.sh');
		res.json({
			status_s1:myServer1,
			status_s2:myServer2
		})
	} else if (req.body.button == 'btnRestartServer2'){
		shell.exec(PATH + '/restartInstancia2.sh');
		res.json({
			status_s1:myServer1,
			status_s2:myServer2
		})
	} else {
		res.send('Error');
	}
}


writeLogs();
readLogServer1();
readLogServer2();

 module.exports = {
	 postLogs,
	 postRestart
	}