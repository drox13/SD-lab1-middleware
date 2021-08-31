//onst shell = require('shelljs');
window.onload = function() {
    let btnRestartServer1 = document.getElementById('btnRestartServer1')
    let btnRestartServer2 = document.getElementById('btnRestartServer2');
    btnRestartServer1.addEventListener("click", wakeUpServer1)
    btnRestartServer2.addEventListener("click", wakeUpServer2)
    btnRestartServer1.style.display = "none";
    btnRestartServer2.style.display = "none";
}

function wakeUpServer1() {
    resultServer1.innerHTML = 'Restaurando servidor...'
    const btnID = document.getElementById('btnRestartServer1').getAttribute('id');
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8000/restart', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const res = JSON.parse(xhr.response);
            resultServer1.innerHTML = res.status_s1;
        }
    }
    const data = { button : btnID };
    xhr.send(JSON.stringify(data));
    
}

function wakeUpServer2() {
    resultServer2.innerHTML = 'Restaurando servidor...'
    const btnID = document.getElementById('btnRestartServer2').getAttribute('id');
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8000/restart', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const res = JSON.parse(xhr.response);
            resultServer2.innerHTML = res.status_s2;
        }
    }
    const data = { button : btnID };
    xhr.send(JSON.stringify(data));
}

const obj = { msg: 'getStatus' };

let statusServer1 = '';
let statusServer2 = '';
let btnRestartServer1 = document.querySelector('#btnRestartServer1');
let btnRestartServer2 = document.querySelector('#btnRestartServer2');

function changeValuesBtnServer1() {
    if (checkStatusServerOne() != '200') {
        btnRestartServer1.style.display = "block";
        btnRestartServer1.style.backgroundColor = 'rgba(0, 136, 169, 1)';
    } else {
        btnRestartServer1.style.display = "none";
    }
}

function changeValuesBtnServer2() {
    if (checkStatusServerTwo() != '200') {
        btnRestartServer2.style.display = "block";
        btnRestartServer2.style.backgroundColor = 'rgba(0, 136, 169, 1)';
    } else {
        btnRestartServer2.style.display = "none";
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

const resultServer1 = document.getElementById('containerServer1');
const resultServer2 = document.getElementById('containerServer2');

function refreshPage() {
    fetch('/', options)
        .then((response) => {
            return response.json();
        })
        .then((jsonResponse) => {
            statusServer1 = jsonResponse.status_s1;
            statusServer2 = jsonResponse.status_s2;
            resultServer1.innerHTML = statusServer1;
            resultServer2.innerHTML = statusServer2;
            changeValuesBtnServer1();
            changeValuesBtnServer2();
        })
        .catch((error) => {
            console.log(error);
        });
}