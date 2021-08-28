const shell = require('shelljs');
const fs = require('fs');

var myServer1 = '';
var myServer2 = '';

const PATH = process.cwd();

function writeLogs() {
	setInterval(() => {
		//shell.exec('/home/lab1/SD-lab1/bash/ping.sh');
		//prueba Brayan
		shell.exec(PATH + '/ping.sh');
	}, 1000);
}

function readLogServer1() {
	setInterval(() => {
		try {
			myServer1 = fs.readFileSync(PATH + '/dataLogs/lastLogServer1.log', 'utf8');
			//checkStatusServerOne();
			//console.log(myServer1);
		} catch (err) {
			console.error(err);
		}
	}, 1000);
}

function readLogServer2() {
	setInterval(() => {
		try {
			myServer2 = fs.readFileSync(PATH + '/dataLogs/lastLogServer2.log', 'utf8');
			//checkStatusServerTwo();
			//console.log(myServer2);
		} catch (err) {
			console.error(err);
		}
	}, 1000);
}

const getLogs = (req, res) => {
	const myReq = req.body;
	console.log(myReq);
	res.json({
		status_s1:myServer1,
		status_s2:myServer2
	})
};

// function checkStatusServerOne() {
// 	let data = myServer1.split(' ');
// 	console.log('data: ', data);
// 	for (let index = 0; index < data.length; index++) {
// 		const status = data[0];
// 		if (status != 200) {
// 		}
// 	}
// }

// function checkStatusServerTwo() {
// 	let data = myServer2.split(' ');
// 	const status = data[0];
// 	return status;
// }

// const getStatus = (req, res) => {
// 	if (checkStatusServerTwo() === '200') {
// 		res.send({ status: true });
// 	} else {
// 		res.send({ status: false });
// 	}
// };

writeLogs();
readLogServer1();
readLogServer2();

 module.exports = getLogs