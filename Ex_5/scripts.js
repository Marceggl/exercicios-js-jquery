/* function Ex_5() {
    var n1, n2, n3, som;
    n1 = parseInt(prompt("Digite o primeiro valor: "));
    n2 = parseInt(prompt("Digite o segundo valor: "));
    n3 = parseInt(prompt("Digite o terceiro valor: "));
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Alguma das entradas digitadas não é um número, por favor reicinie o programa e digite números !");
    } else {
        var som = (n1 + n2 + n3);
        alert("A soma de " + n1 + " + " + n2 + " + " + n3 + " = " + som);
    }
} */
$(".button").click(function() {
    let ent = document.querySelectorAll(".entrada");
    soma = 0;
    j = true;
    for (let i = 0; i < ent.length && j == true; i++) {
        if (ent[i].value != "") {
            soma += parseInt(ent[i].value);
        } else {
            alert("Preencha todos os campos");
            j = false;
        }
    }
    if (j == true) { $(".resposta").show().html("<p class='mostrar'> A soma de " + ent[0].value + " + " + ent[1].value + " + " + ent[2].value + " = " + soma); }
})