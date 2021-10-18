var maçã = 1
var banana = 0.5
var abacaxi = 1.5
var res1 = document.getElementById("res1")
var res2 = document.getElementById("res2")
var res3 = document.getElementById("res3")
var res10 = document.getElementById("res10")
var res20 = document.getElementById("res20")
var res30 = document.getElementById("res30")
let res100 = document.getElementById("res100")
var res200 = document.getElementById("res200")
const res300 = document.getElementById("res300")

function calc() {
  res1.innerHTML = null
  res2.innerHTML = null
  res3.innerHTML = null
  res10.innerHTML = null
  res20.innerHTML = null
  res30.innerHTML = null
  res100.innerHTML = null
  res200.innerHTML = null
  res300.innerHTML = null
  var din = document.getElementById("din").value
  var nm = Math.floor(din/maçã)
  var nb = Math.floor(din/banana)
  var na = Math.floor(din/abacaxi)
  if(nm<5){
    res1.innerHTML = nm +" Maçãs"
  } else if(5<nm<15){
    res1.innerHTML = nm +" Maçãs"
    res10.innerHTML = Math.floor( nm + (0.1 * nm)) + " Maçãs"
  }  if(nm>15) {
    res1.innerHTML = nm +" Maçãs"
    res10.innerHTML = Math.floor( nm + (0.1 * nm)) + " Maçãs"
    res100.innerHTML = Math.floor( nm + (0.15 * nm)) + " Maçãs"
    console.debug(res100)
  }
  if(nb<5){
    res2.innerHTML = nb +" Bananas"
  } else if(5<nb<15){
    res2.innerHTML = nb +" Bananas"
    res20.innerHTML = Math.floor( nb + (0.1 * nb)) + " Bananas"
  }  if(nb>15){
    res2.innerHTML = nb +" Bananas"
    res20.innerHTML = Math.floor( nb + (0.1 * nb)) + " Bananas"
    res200.innerHTML =  Math.floor( nb + (0.15 * nb)) + " Bananas"
  }
  if(na<5){
    res3.innerHTML = na +" Abacaxis"
  } else if(5<na<15){
    res3.innerHTML = na +" Abacaxis"
    res30.innerHTML = Math.floor( na + (0.1 * na)) + " Abacaxis"
  } if(na>15){
    res3.innerHTML = na +" Abacaxis"
    res30.innerHTML = Math.floor( na + (0.1 * na)) + " Abacaxis"
    res300.innerHTML = Math.floor( na + (0.15 * na)) + " Abacaxis"
  }

}
