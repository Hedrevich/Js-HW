'use scrict'
let url = "http://localhost:3000/posts";
let data = [];
window.onload = init;

function init() {
    document.getElementById("get").addEventListener("click", (ev) => {
        ev.preventDefault();
        getData();
    });

    document.getElementById("delete").addEventListener("click", (ev) => {
        ev.preventDefault();
        deleteData();
    });
    document.getElementById("post").addEventListener("click", (ev) => {
        ev.preventDefault();
        postData();
    });
    document.getElementById("put").addEventListener("click", (ev) => {
        ev.preventDefault();
        putData();
    });
}



function deleteData() {
    let checkBoxes = document.querySelectorAll('input[type="checkbox"]');

    for (let index = 1; index < checkBoxes.length; index++) {
        if (checkBoxes[index].checked) {
            deleteRow(data[index - 1].id);
        }
        clearAll();
        getData();
    }
   
}

function deleteRow(id) {
    let xhr = new XMLHttpRequest();
    tempUrl = `${url}/${id}`;
    xhr.open('DELETE', tempUrl, true);
    xhr.send();

    xhr.onload = function () {
        if (xhr.readyState !== 4) return;

        if (xhr.status != 200) {
            alert(`${xhr.status}:${xhr.statusText}`);

        } else {
            console.log(xhr.responseText);
            getData();
        }

    }
}

function onRowClick(id) {
    let row = data.find((elem) => {
        return elem.id == id;
    });

    document.getElementById("id").value = row.id;
    document.getElementById("userId").value = row.userId;
    document.getElementById("title").value = row.title;
    document.getElementById("body").value = row.body;
}



function clearAll() {
    let textBoxes = document.querySelectorAll('input[type="text"]');

    for (let i = 0; i < textBoxes.length; i++) {
        textBoxes[i].value = "";
    }
}

function postData() {
    userId = document.getElementById('userId').value;
    title = document.getElementById('title').value;
    body = document.getElementById('body').value;

    var xhr = new XMLHttpRequest();
    var bodyS = "userId=" + userId + "&title=" + title + '&body=' + body;
    xhr.open('POST', 'http://localhost:3000/posts', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(bodyS);
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == "201") {
            clearAll();
            getData();
            alert('Added!');
        }
    }

    xhr.onerror = function () {
        alert(xhr.status + ': ' + xhr.statusText);
    }
}

function Info(args) {

    this.userId = args[0];
    this.title = args[1];
    this.body = args[2];
}


function putData() {
    let textBoxes = document.querySelectorAll('input[type="text"]');
    let textValues = [];

    for (let i = 1; i < textBoxes.length; i++) {
        if (textBoxes[i].value === "") {
            alert("You should fill all fields!");
            return;
        }
        textValues.push(textBoxes[i].value);
    }

    let user = new Info(textBoxes);
    let jsonUser = JSON.stringify(user);

    let xhr = new XMLHttpRequest();
    xhr.open('PUT', '${http://localhost:3000/posts}/${document.getElementById("id").value}', true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(jsonUser);

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;

        if (xhr.status !== 200) {
            alert(`${xhr.status}:${xhr.statusText}`);
        } else {
            console.log(xhr.responseText);
            clearAll();
            getData();
        }

    };

}

function getData() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', getUrl(), true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;

        if (xhr.status !== 200) {
            alert(`${xhr.status}:${xhr.statusText}`);
        } else {
            data = JSON.parse(xhr.responseText);
            console.log(data);
            showData(data);
        }

    }
}

function getValueFromInput(id) {
    return document.getElementById(id).value;
}

function getUrl() {
    let resultUrl = url;
    let inputs = document.querySelectorAll("input[type=text]");
    let filter = "";
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value !== "") {
            if (filter !== "") {
                filter += "&"
            }
            filter += `${inputs[i].name}=${inputs[i].value}`;
        }
    }

    if (filter !== "") {
        resultUrl += `?${filter}`;
    }

    return resultUrl;
}

function removeTable() {
    let tables = document.querySelectorAll("table");
    if (tables.length) {
        tables[0].remove();
    }
}

function showData(data) {
    if (data.length !== 0) {
        removeTable();
        let table = document.createElement("table");
        table.className = "table-striped";
        let head = document.createElement("thead");
        head.appendChild(createRow("th", ["ID", "Userid", "title", "body"]));
        let body = document.createElement("tbody");
        for (let i = 0; i < data.length; i++) {
            let row = createRow("td", [
                data[i].id,
                data[i].userId,
                data[i].title,
                data[i].body,
            ]);
            body.appendChild(row);
        }

        table.appendChild(head);
        table.appendChild(body);
        document.getElementsByClassName('container')[0].appendChild(table);
        createCheckboxes();
        document.getElementById("delete").style.visibility = "visible";
    }
}

function createRow(tag, values) {
    let row = document.createElement("tr");
    for (let i = 0; i < values.length; i++) {
        let column = document.createElement(tag);
        column.innerHTML = values[i];
        row.appendChild(column);
    }
    if (tag === "td") {
        row.id = values[0];
        row.addEventListener("click", (ev) => {
            onRowClick(row.id);
        });
    }

    return row;
}


function createCheckboxes() {
    let rows = document.querySelectorAll("tr");
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', "checkbox");
    checkbox.id = "selectAll";
    checkbox.value = "selectAll";
    checkbox.addEventListener('change', function () {
        let checkBoxes = document.querySelectorAll('input[type="checkbox"]');
        if (this.checked) {
            for (let index = 1; index < checkBoxes.length; index++) {
                checkBoxes[index].checked = true;
            }
        } else {
            for (let index = 1; index < checkBoxes.length; index++) {
                checkBoxes[index].checked = false;
            }
        }
    });

    rows[0].appendChild(checkbox);

    for (let index = 1; index < rows.length; index++) {
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', "checkbox");
        checkbox.id = data[index - 1].id;
        rows[index].appendChild(checkbox);
    }
}