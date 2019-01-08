var newEl = document.createElement("div");
var username = prompt("Enter you Username", "Username");
var i = 0;
if (/[0-9]/.test(username)) {
    for (i; i < username.length; i++) {
        if (i % 2 == 0) {
            console.log(username[i].toUpperCase());
            newEl.innerHTML += username[i].toUpperCase();
            if (username[i + 1]) newEl.innerHTML += username[i + 1].toLowerCase();
        }
    }
} else {
    newEl.innerHTML = username.split("").reverse().join("");
}

var cont = document.getElementById("container");
cont.appendChild(newEl);