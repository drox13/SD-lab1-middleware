// const shell = require('shelljs');
// const fs = require('fs');

// var myServer1 = '';
// var myServer2 = '';

// function writeLogs() {
// 	setInterval(() => {
// 		shell.exec('/home/lab1/SD-lab1/bash/ping.sh');
// 		//prueba Dro
// 		//shell.exec('/home/dario/Documentos/SD-lab1/Milldware/pingdro.sh');
// 	}, 1000);
// }

// function readLogServer1() {
// 	setInterval(() => {
// 		try {
// 			myServer1 = fs.readFileSync('/home/lab1/SD-lab1/Milldware/lastLogServer1.log', 'utf8');
// 			//Ruta DRO
// 			//myServer = fs.readFileSync(path, 'utf8');
// 			checkStatusServerOne();
// 			console.log(myServer1);
// 		} catch (err) {
// 			console.error(err);
// 		}
// 	}, 1000);
// }

// function readLogServer2() {
// 	setInterval(() => {
// 		try {
// 			myServer2 = fs.readFileSync('/home/lab1/SD-lab1/Milldware/lastLogServer2.log', 'utf8');
// 			//Ruta DRO
// 			//myServer = fs.readFileSync(path, 'utf8');
// 			checkStatusServerTwo();
// 			console.log(myServer2);
// 		} catch (err) {
// 			console.error(err);
// 		}
// 	}, 1000);
// }

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

 const getLogs = (req, res) => {
 	res.status(200).json({
		 msg:'Mensaje recibido'
	 })
 };

// const getStatus = (req, res) => {
// 	if (checkStatusServerTwo() === '200') {
// 		res.send({ status: true });
// 	} else {
// 		res.send({ status: false });
// 	}
// };

// writeLogs();
// readLogServer1();
// readLogServer2();

 module.exports = getLogs