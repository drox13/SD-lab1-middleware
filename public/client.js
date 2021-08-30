//onst shell = require('shelljs');
const obj = {msg:'getStatus'};


let statusServer1 = '';
let statusServer2 = '';
let btnRestartServer1 = document.querySelector('#btnRestartServer1');
let btnRestartServer2 = document.querySelector('#btnRestartServer2');

console.log(btnRestartServer1, 'Hola1');
console.log(btnRestartServer2, 'Hola2');

btnRestartServer1.disabled = true;
btnRestartServer2.disabled = true;

function changeValuesBtnServer1() {
    if (checkStatusServerOne() !== '200') {
        btnRestartServer1.disabled = false;
        btnRestartServer1.style.backgroundColor = 'rgba(0, 136, 169, 1)';
    } else {
        btnRestartServer1.disabled = true;
        btnRestartServer1.style.backgroundColor = '#ff0000';
    }
}

function changeValuesBtnServer2() {
    if (checkStatusServerTwo() !== '200') {
        btnRestartServer2.disabled = false;
        btnRestartServer2.style.backgroundColor = 'rgba(0, 136, 169, 1)';
    } else {
        btnRestartServer2.disabled = true;
        btnRestartServer2.style.backgroundColor = '#ff0000';
    }
}

function checkStatusServerOne() {
	let data = statusServer1.split(' ');
	const status = data[0];
	return status;
}

function checkStatusServerTwo() {
	let data = statusServer2.split(' ');
	const status = data[0];
	return status;
}

const options = {
    method:'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(obj)
};

function refreshPage(){
    fetch('/', options)
    .then((response) => {
        return response.json();
    })
    .then((jsonResponse) => {
        statusServer1 = jsonResponse.status_s1;
        console.log(statusServer1);
        statusServer2 = jsonResponse.status_s2;
        console.log(statusServer2);
        let resultServer1 = document.getElementById('containerServer1');
        resultServer1.innerHTML = statusServer1;
        let resultServer2 = document.getElementById('containerServer2');
        resultServer2.innerHTML = statusServer2;
        changeValuesBtnServer1();
        changeValuesBtnServer2();
    })
    // `<h5>${statusServer2}</h5>`
    .catch((error) => {
        console.log(error);
    });
}

function sendScriptToRestartServer1(){
    //shell.exec();
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', 'http://localhost:8000/restart',true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    alert(btnRestartServer2.getAttribute('id'));
    let data = {msg: btnRestartServer1.getAttribute('id')};
    xhr.send(JSON.stringify(data));
    console.log('Enviando script #1...');
}

function sendScriptToRestartServer2(){
    //shell.exec();
    console.log('Enviando script #2..');
    obj = 
    fetch('/restart', options)
    .then((response) => {
        return response.json();
    })
    .then((jsonResponse) => {
        message = jsonResponse.msg;
        alert(message, 'Restarting server...');
    })
    // `<h5>${statusServer2}</h5>`
    .catch((error) => {
        console.log(error);
    });
}