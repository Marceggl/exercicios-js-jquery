$(".button").click(function() {
    let ent = document.querySelectorAll(".entrada");
    let delta;
    let x1;
    let x2;
    if (ent[0].value != "" && ent[1].value != "" && ent[2].value != "") {
        delta = parseFloat((ent[1].value * ent[1].value) - 4 * ent[0].value * ent[2].value);
        if (delta >= 0) {
            x1 = parseFloat(((ent[0].value - Math.sqrt(delta)) / (2 * ent[0].value))).toFixed(2);
            x2 = parseFloat(((ent[0].value + Math.sqrt(delta)) / (2 * ent[0].value))).toFixed(2);
            $(".resposta").show().html("<p class='mostrar'>O resultado da equação é:<br/>X¹ = " + x1 + "<br/>X² = " + x2)
        } else {
            $(".resposta").show().html("<p class='mostrar'>O resultado de Delta é negativo. Delta = " + delta)
        }
    } else {
        alert("Preencha todos os campos")
    }
})

/* function Ex_10() {
    var a, b, c, delta, x1, x2;
    a = parseFloat(prompt("Digite o valor de A: "));
    b = parseFloat(prompt("Digite o valor de B: "));
    c = parseFloat(prompt("Digite o valor de C: "));
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Algo esta errado tente digitar apenas números!!!");
    } else {
        delta = (b * b) - 4 * a * c;
        if (delta >= 0) {
            x1 = ((-b + Math.sqrt(delta)) / (2 * a));
            x2 = ((-b - Math.sqrt(delta)) / (2 * a));
            x1 = parseFloat(x1.toFixed(2));
            x2 = parseFloat(x2.toFixed(2));
            alert("Os valores das raizes são: \nX1 é: " + x1 + "\nX2 é: " + x2);
        }
    }
} */