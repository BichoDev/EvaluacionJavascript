function mostrarTablaMultiplicar() {
    var numero = parseInt(document.getElementById("numero").value);
    var tablaMultiplicar = document.getElementById("tablaMultiplicar");
    tablaMultiplicar.innerHTML = ""; // Limpiar el contenido anterior

    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        tablaMultiplicar.innerHTML += numero + " x " + i + " = " + resultado + "<br>";
    }
}
