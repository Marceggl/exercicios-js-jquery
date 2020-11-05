$(".button").click(function() {
    let ent = document.querySelectorAll(".entrada");
    let area = 0;
    if (ent[0].value != "" && ent[1].value != "") {
        area = (ent[0].value * ent[1].value) / 2;
        $(".respbtn").val(area);
    } else { alert("Preencha todos os campos!!!") }
})

/* function Ex_6() {
    var height, base, area;
    height = parseFloat(prompt("Digite a altura do triângulo: "));
    base = parseFloat(prompt("Digite a base do triângulo: "));
    if (isNaN(height) || isNaN(base)) {
        alert("Alguma das entradas digitadas não é um número, por favor reicinie o programa e digite números !");
    } else {
        area = (base * height) / 2
        alert("A area de um triangulo com: \nbase: " + base + " \naltura: " + height + " \npossui área: " + area);
    }
} */