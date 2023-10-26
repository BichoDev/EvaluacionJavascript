function determinarParImpar() {
    var numero = parseInt(document.getElementById("numero").value);
    
    if (numero % 2 === 0) {
        document.getElementById("resultado").textContent = "Par";
    } else {
        document.getElementById("resultado").textContent = "Impar";
    }
}
