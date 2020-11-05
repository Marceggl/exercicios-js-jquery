$(".button").click(function() {
    let ent = document.querySelectorAll(".entrada");
    let media = 0;
    let j = true;
    for (let i = 0; i < ent.length && j == true; i++) {
        if (ent[i].value != "") {
            media += parseInt(ent[i].value);
        } else {
            alert("Preencha todos os campos!!!");
            j = false;
        }
    }
    if (j == true) { $(".resposta").show().html("<p class='mostrar'> A media das notas é:" + (media / 3) + "</p>") }
})