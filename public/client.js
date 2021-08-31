//onst shell = require('shelljs');
window.onload = function() {
    let btnRestartServer1 = document.getElementById('btnRestartServer1')
    let btnRestartServer2 = document.getElementById('btnRestartServer2');
    let btn1ID = btnRestartServer1.getAttribute('id')
    let btn2ID = btnRestartServer2.getAttribute('id')
    btnRestartServer1.addEventListener("click", wakeUpServer1)
    btnRestartServer2.addEventListener("click", wakeUpServer2)
    btnRestartServer1.style.display = "none";
    btnRestartServer2.style.display = "none";
}

function wakeUpServer1() {
    const btnID = document.getElementById('btnRestartServer1').getAttribute('id');
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8000/restart', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    const data = { button : btnID };
    xhr.send(JSON.stringify(data));
}

function wakeUpServer2() {
    const btnID = document.getElementById('btnRestartServer2').getAttribute('id');
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8000/restart', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    const data = { button : btnID };
    xhr.send(JSON.stringify(data));
}

const obj = { msg: 'getStatus' };

let statusServer1 = '';
let statusServer2 = '';
let btnRestartServer1 = document.querySelector('#btnRestartServer1');
let btnRestartServer2 = document.querySelector('#btnRestartServer2');

function changeValuesBtnServer1() {
    if (checkStatusServerOne() !== '200') {
        btnRestartServer1.style.display = "block";
        btnRestartServer1.style.backgroundColor = 'rgba(0, 136, 169, 1)';
    } else {
        btnRestartServer1.style.display = "none";
        btnRestartServer1.style.backgroundColor = '#ff0000';
    }
}

function changeValuesBtnServer2() {
    if (checkStatusServerTwo() !== '200') {
        btnRestartServer2.style.display = "block";
        btnRestartServer2.style.backgroundColor = 'rgba(0, 136, 169, 1)';
    } else {
        btnRestartServer2.style.display = "none";
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
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj)
};

function refreshPage() {
    fetch('/', options)
        .then((response) => {
            return response.json();
        })
        .then((jsonResponse) => {
            statusServer1 = jsonResponse.status_s1;
            statusServer2 = jsonResponse.status_s2;
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