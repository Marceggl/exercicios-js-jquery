$(".button").click(function() {
    let j = false;
    let soma = 0;
    for (let i = 0; i < 2; i++) {
        if (document.querySelectorAll(".entrada")[i].value == "" && j == false) {
            j = true;
            alert("A entrada " + (i + 1) + " não esta preenchida")
        } else if (j == false) {
            soma += parseInt(document.querySelectorAll(".entrada")[i].value);
            $("#mostrar").show().html("<p class='mostrar'>A soma dos números é: " + soma + "</p>")
        }
    }
})