//funcion para sumar numeros
function sumarNumeros() {
    //asigno nombre de variable y lo pido al usuario
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    
    var resultado = num1 + num2 + num3;
    
    document.getElementById("resultado").textContent = resultado;
}
