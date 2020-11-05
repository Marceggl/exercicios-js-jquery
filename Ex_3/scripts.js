$(".button").click(function() {
    let ent = $(".entrada").val()
    if (ent != "") {
        $(".resposta").show().html("<p class='mostrar'>O quadrado do número " + ent + " é " + (ent * ent) + "</p>")
    } else {
        $(".resposta").hide()
        alert("Entrada não preenchida")
    }
})