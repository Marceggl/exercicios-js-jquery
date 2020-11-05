$(".button").click(function() {
    let entrada = document.querySelectorAll(".entrada");
    let mostrar = "";
    let j = true;
    for (let i = 0; i < entrada.length && j == true; i++) {
        if (entrada[i].value != "") {
            mostrar += "<p class='mostrar'/>" + entrada[i].value + "</p>"
        } else {
            alert("Preencha todos os formulários");
            j = false;
        }
    }
    if (j == true) {
        $(".resposta").show().html(mostrar)
    }
})

/* function Ex_9() {
    var name1, name2, name3;
    name1 = prompt("Digite seu nome: ");
    name2 = prompt("Digite outro nome: ");
    name3 = prompt("Digite mais um nome: ");
    alert(name1 + "\n" + name2 + "\n" + name3);
} */