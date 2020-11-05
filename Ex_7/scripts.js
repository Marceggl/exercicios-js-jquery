$(".button").click(function() {
    let entrada = document.querySelectorAll(".entrada");
    if (entrada[0].value != "" && entrada[1].value != "" && entrada[2].value != "") {
        $(".resposta").show().html("<p class='mostrar'>Olá!! " + entrada[0].value + ".<br/>Você nasceu em: " + entrada[1].value + ".<br/>Você tem: " + (entrada[2].value - entrada[1].value) + " anos.")
    } else {
        alert("Preencha todos os campos")
    }
})

/* function Ex_7() {
    var name, yearBirth, currentYear, age;

    name = String(prompt("Digite seu nome: "));
    yearBirth = parseInt(prompt("Digite o ano de nascimento: "));
    currentYear = parseInt(prompt("Digite o ano em que está: "));

    if (isNaN(yearBirth) || isNaN(currentYear)) {
        alert("Alguma das entradas digitadas não é um número, por favor reicinie o programa e digite números !");
    } else {
        age = currentYear - yearBirth;
        alert("Olá: " + name + "\nvocê nasceu em: " + yearBirth + "\nE você tem: " + age + " anos.");
    }
} */