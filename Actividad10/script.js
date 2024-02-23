function calificar() {

    let primerResultado = document.getElementById("resultado0").innerHTML;
    let segundoResultado = document.getElementById("resultado1").innerHTML;
    let tercerResultado = document.getElementById("resultado2").innerHTML;
    let cuartoResultado = document.getElementById("resultado3").innerHTML;

    let alumnos = ["Cayetano", "Javier", "Alejandro", "Ilyas"];
    let notas = [];
    let i = 0;

    while (i < alumnos.length) {
        notas[i] = parseInt(prompt("Introduce la nota de " + alumnos[i]))
        i++;
    }
    
    primerResultado = alumnos[0] + ": " + notas[0];
    segundoResultado = alumnos[1] + ": " + notas[1];
    tercerResultado = alumnos[2] + ": " + notas[2];
    cuartoResultado = alumnos[3] + ": " + notas[3];
}


