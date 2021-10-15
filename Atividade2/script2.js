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
var i = 0
function mais(){
    
    let res = document.getElementById("num")
    if(i<10)
    i++
    res.innerHTML = i
    console.debug(res)
      
}
function menos(){

    let res = document.getElementById("num")
    if(i>0)
    i--
    res.innerHTML = i
    console.debug(res)

}
//Parte 4
function calc() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;

    var delta = b * b + 4 * a * c;
    console.log(delta);
    if (delta > 0) {
      var x1 = -b + (Math.sqrt(delta) / 2) * a;
      var x2 = -b - (Math.sqrt(delta) / 2) * a;
      document.getElementById(
        "result"
      ).innerHTML = `Delta igual a ${delta}, função tem raizes iguais à ${x1} e ${x2}`;
    } else {
      if ((delta = 0)) {
        var x1 = -b + (Math.sqrt(delta) / 2) * a;
        document.getElementById(
          "result"
        ).innerHTML = `Delta igual a ${delta}, então função tem duas raizes iguais a ${x1}`;
      } else {
        document.getElementById(
          "result"
        ).innerHTML = `Delta igual a ${delta}, então função não possui raizes reais`;
      }
    }
  }