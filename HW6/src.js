

function getRequest() {
    var url = 'https://my-json-server.typicode.com/hedrevich/js-hw/posts/';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
    } else
        createTable(xhr);
}

function getUser() {
    ID = document.getElementById('ID').value;
var url  = "https://my-json-server.typicode.com/hedrevich/js-hw/posts/";
var xhr  = new XMLHttpRequest()
xhr.open('GET', url + ID, true)
xhr.onload = function () {
	var users = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "200") {
	createTable(xhr);
	} else {
		console.error(users);
	}
}
xhr.send(body);
}


function postRequest() {
    userId = document.getElementById('userId').value;
    title = document.getElementById('title').value;
    body = document.getElementById('body').value;

    var xhr = new XMLHttpRequest();
    var body = "User ID=" + userId + "&Title=" + title + '&body=' + body;
    xhr.open('POST', 'https://my-json-server.typicode.com/hedrevich/js-hw/posts', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(body);
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == "201") {
            getRequest();
            alert(xhr.responseText);
        }
    }

    xhr.onerror = function () {
        alert(xhr.status + ': ' + xhr.statusText);
    }
}

function deleteRequest() {
    var xhr = new XMLHttpRequest();

}

 
    function putRequest() {
        userId = document.getElementById('userId').value;
        title = document.getElementById('title').value;
        body = document.getElementById('body').value;
    
        var xhr = new XMLHttpRequest();
        var body = "User ID=" + userId + "&Title=" + title + '&body=' + body;
        xhr.open('PUT', 'https://my-json-server.typicode.com/hedrevich/js-hw/posts', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(body);
        xhr.onload = function () {
            if (xhr.readyState == 4 && xhr.status == "201") {
                getRequest();
                alert(xhr.responseText);
            }
        }
    
        xhr.onerror = function () {
            alert('Ошибка ' + xhr.status);
        }
    }


function createTable(xhr) {
    var array = JSON.parse(xhr.responseText);
    var myHTMLStr = '<table>';
    myHTMLStr += '<th>User ID</th><th>ID</th><th>Title</th><th>Body</th>';
    for (var i in array) {
        myHTMLStr += '<tr><td>' + array[i]['userId'] + '</td><td>' +
            array[i]['id'] + '</td><td>' +
            array[i]['title'] + '</td><td>' +
            array[i]['body'] + '</td></tr>';
    }
    myHTMLStr += '</table>';
    document.getElementById('table').innerHTML = myHTMLStr;
}