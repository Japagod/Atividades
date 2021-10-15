//Parte 1
function maior(){
    document.getElementById("texto1").innerHTML = 
     document.getElementById("texto1").innerHTML.big
     ();
}
function menor(){
    document.getElementById("texto1").innerHTML = 
     document.getElementById("texto1").innerHTML.small()
}
// Parte 2
function Blue(){
    document.getElementById("texto2").style.color = "blue"
}
function Red(){
    document.getElementById("texto2").style.color = "red"
}
function Green(){
    document.getElementById("texto2").style.color = "green"
}
function cor(){
    let cor = document.getElementById("cor").value
    document.getElementById("texto2").style.color = cor
}
function mais(){
    
    let res = document.getElementById("num")
    res.innerHTML = num.value + 1
    console.debug(res)
      
}