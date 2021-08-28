
const obj = {msg:'getStatus'};


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
        const statusServer1 = jsonResponse.status_s1;
        console.log(statusServer1);
        const statusServer2 = jsonResponse.status_s2;
        console.log(statusServer2);
        let resultServer1 = document.getElementById('containerServer1');
        resultServer1.innerHTML = statusServer1;
        let resultServer2 = document.getElementById('containerServer2');
        resultServer2.innerHTML = statusServer2;
    })
    // `<h5>${statusServer2}</h5>`
    .catch((error) => {
        console.log(error);
    });
}

