
    for (var i = 0; i < 19; i++) {
        var el = document.createElement("div");
        el.classList.add("item");
        el.innerHTML = '<div class="item"><img src="../img/durov.jpg" alt=""><div class="name">DUROV</div></div>';
        var cont = document.getElementById("scroll-list");
        cont.appendChild(el);    
    }
    
    for (var i = 0; i < 29; i++) {
        var el = document.createElement("div");
        el.classList.add("chat");
        el.innerHTML = '<div class="message"><div> <img src="../img/durov.jpg"></div><div class="message-text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem animimollitia accusamus sit aliquam sint repudiandae, corrupti temporibus alias amet laudantium at provident hic facilis quisquam illo fugit tempore natus!</p></div></div><div class="answer"><div class="answer-text"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima reprehenderit doloremque, ipsam corporis voluptates eaque iusto? Repudiandae doloribus rerum officiis vitae nisi cumque dolores qui quo quidem veniam! Tenetur, fugit.</p></div><div class="answer-avatar"><img src="../img/durov.jpg" alt=""></div></div>';
        var cont = document.getElementById("chat");
        cont.appendChild(el);    
    }
    
