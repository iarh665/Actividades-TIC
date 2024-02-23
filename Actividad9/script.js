function factorial(){
    let fact = 1;
    let a = parseInt(document.getElementById("a").value);
    let i = 1;
    while(i<=a){
        fact = fact*i;
        i++;
    }
    document.getElementById("resultado").innerHTML = "Factorial: " + fact;
}



