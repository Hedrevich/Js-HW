Home.onclick = function () {
    document.location.href = "https://www.google.com/"
}

FlexBox.onclick = function () {
    document.getElementById("body").innerHTML = "<div class='main-container'><div class='flex-first-raw'><div class='first-raw-item red ff-item red1'></div><div class='first-raw-item orange fs-item orange1'></div></div><div class='flex-second-raw'><div class='second-raw-item green green1'></div></div><div class='flex-third-raw'><div class='third-raw-item brown brown1'></div><div class='third-raw-item blue ts-item'></div><div class='third-raw-item purple purple1'></div></div></div>";
}