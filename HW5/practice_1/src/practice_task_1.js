LeverX.onclick = function () {
    document.location.href = "https://leverx.ru";
}
var i = 0;
for (i; i < 12; i++) {
    var el = document.createElement("div");
    el.classList.add("tdiv");
    el.innerHTML = "<div class='fdiv'><header>Международное сотрудничество во всех сферах деятельности</header><main>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsam autem laborum quis inventore ipsum praesentium, omnis quam unde quia modi illo dignissimos aut! Enim natus eius aliquam assumenda unde!</main><button class='Try'>Try</button></div></div>";
    var cont = document.getElementById("mainmain");
    cont.appendChild(el);

}


