function calcular() {
    let a = parseInt(document.getElementById("a").value, 0);
    let b = parseInt(document.getElementById("b").value, 0);
    document.getElementById("resultado").innerHTML = "Primer valor: " + a 
    + "<br> Segundo valor: " + b 
    + "<br> Suma: " + (a + b) 
    + "<br> Resta: " + (a - b) 
    + "<br> Producto: " + (a * b) 
    + "<br> División: " + (a / b) 
    + "<br> Resto: " + (a % b);
}
