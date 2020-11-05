$(".button").click(function() {
    let valores = document.querySelectorAll(".entrada");
    if (valores[0].value != "" && valores[1].value != "") {
        let degNesc = parseFloat((valores[0].value * 100) / valores[1].value);

        $(".resposta").show().html("<p class='mostrar'>A escada deverá ter: " + degNesc + "</p>")
    }
})

/* function Ex_8() {
    var alt_degrau, alt_desejada, qtde_degrau;

    alt_degrau = parseFloat(prompt("Digite a altura do degrau em cm: "));
    alt_desejada = parseFloat(prompt("Digite a altura desejada em metros: "));

    if (isNaN(alt_degrau) || isNaN(alt_desejada)) {
        alert("Alguma das entradas digitadas não é um número, por favor reicinie o programa e digite números !");
    } else {

        alt_degrau = alt_degrau / 100;
        qtde_degrau = Math.floor(alt_desejada / alt_degrau);

        alert("A quantidade de degraus necessários é: " + qtde_degrau);
    }
} */