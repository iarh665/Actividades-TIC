function comprobar() {
    let a = parseInt(document.getElementById("a").value, 0);

    if (a % 2 == 0) {
        document.getElementById("resultado").innerHTML = "Par";
    }
    else {
        document.getElementById("resultado").innerHTML = "Impar";
    }
}
