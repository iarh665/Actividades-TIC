function comprobar() {
    let nota = parseInt(document.getElementById("nota").value, 0);

    if (nota >= 0 && nota <= 10) {

        if (nota >= 5) {
            document.getElementById("resultado").innerHTML = "Aprobado";
        }
        else {
            document.getElementById("resultado").innerHTML = "Suspenso";
        }
    }
    else {
        document.getElementById("resultado").innerHTML = "Introduce una nota válida";
    }
}