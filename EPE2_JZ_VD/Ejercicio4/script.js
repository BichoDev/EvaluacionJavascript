let arrNumeros = new Array(5);

for (let i = 0; i < arrNumeros.length; i++) {
 arrNumeros[i] = parseInt(prompt("Ingrese un número: "));
}

let sumaNumeros = 0;
for (let i = 0; i < arrNumeros.length; i++) {
 document.write("Elemento " + (i + 1) + ": " + arrNumeros[i] + "<br>");
 sumaNumeros += arrNumeros[i];
}

let promedioNumeros = sumaNumeros / arrNumeros.length;
document.write("La suma del vector es: " + sumaNumeros + "<br>");
document.write("El promedio del vector es: " + promedioNumeros + "<br>");

let arrPares = [];
let arrImpares = [];
for (let i = 0; i < arrNumeros.length; i++) {
 if (arrNumeros[i] % 2 === 0) {
    arrPares.push(arrNumeros[i]);
 } else {
    arrImpares.push(arrNumeros[i]);
 }
}
document.write("Los números pares del vector son: " + arrPares + "<br>");
document.write("Los números impares del vector son: " + arrImpares + "<br>");