$(".button").click(function() {
    let valor = $("#entUser").val();
    if (valor == "") {
        $("#resposta").show().html("<p class='mostrar'>Nenhum valor colocado</p>");
    } else {
        valor = valor * 2;
        $("#resposta").show().html("<p class='mostrar'>" + valor + "</p>")
    }
})