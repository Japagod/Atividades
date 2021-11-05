var preçom = 1
var preçob = 0.5
var preçoa = 1.5
var res = document.getElementById("cp")
function calculapreço() {
    var maça = document.getElementById("maça").value
    var banana = document.getElementById("banana").value
    var abacaxi = document.getElementById("abacaxi").value
    var vm = maça * preçom
    var vb = banana * preçob
    var va = abacaxi * preçoa
    //maçã
    var resp1 = 0
    if (maça < 5) {
        resp1 = vm
    }
    if (maça >= 5 && maça < 15) {
        resp1 = vm + (vm * 0.1)
    } if (maça >= 15) {
        resp1 = vm + (vm * 0.15)
    }
    //banana
    var resp2 = 0
    if (banana < 5) {
        resp2 = vb
    }
    if (banana >= 5 && banana < 15) {
        resp2 = vb + (vb * 0.1)
    } if (banana >= 15) {
        resp2 = vb + (vb * 0.15)
    }

    //abacaxi
    var resp3 = 0
    if (abacaxi < 5) {
        resp3 = va
    }
    if (abacaxi >= 5 && abacaxi < 15) {
        resp3 = va + (va * 0.1)
    } if (abacaxi >= 15) {
        resp3 = va + (va * 0.15)
    }


    var aaa = resp1 + resp2 + resp3
    res.innerHTML = aaa.toFixed(2)
}