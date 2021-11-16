var dataatual = new Date()
var diaatual = dataatual.getDate()
var main = document.getElementById("main")
const api = "https://discord-moodle-bot.herokuapp.com/api"
async function getISS() {
    const resposta = await fetch(api)
    const data = await resposta.json()
    var datalength = data.events.length
    for (var i = 0; i < data.events.length; i++) {
        nome = data.events[i].name
        date = data.events[i].timestart * 1000
        descrição = data.events[i].description
        curso = data.events[i].course.fullname
        window.localStorage.setItem('key', JSON.stringify(diaatual))
        window.localStorage.setItem('datalength', JSON.stringify(datalength))
        window.localStorage.setItem('nome' + i, JSON.stringify(nome))
        window.localStorage.setItem('date' + i, JSON.stringify(date))
        window.localStorage.setItem('descrição' + i, JSON.stringify(descrição))
        window.localStorage.setItem('curso' + i, JSON.stringify(curso))
    }
    alert("Por favor, reinicie a página")
}
var key = JSON.parse(window.localStorage.getItem('key'))
var datalength = JSON.parse(window.localStorage.getItem('datalength'))

if (diaatual - key > 1) {
    localStorage.clear
    getISS()
} else {
    for (var i = 0; i < datalength; i++) {
        var nome = JSON.parse(window.localStorage.getItem('nome' + i))
        var date = JSON.parse(window.localStorage.getItem('date' + i))
        var horario = new Date(date)
        var [minuto, dia, hora, mes] = [horario.getUTCMinutes(), horario.getDate(), horario.getHours(), horario.getUTCMonth()]
        var descrição = JSON.parse(window.localStorage.getItem('descrição' + i))
        var curso = JSON.parse(window.localStorage.getItem('curso' + i))


        // Construtor



        // Titulo


        var art = document.createElement("article")
        art.classList.add("article")
        var txt = document.createTextNode(curso)
        var p = document.createElement("p")
        var tit = document.createElement("h1")
        tit.appendChild(txt)
        art.appendChild(tit)
        main.appendChild(art)


        txt = document.createTextNode(nome)
        p.appendChild(txt)
        art.appendChild(p)
        main.appendChild(art)

        var div = document.createElement("div")
        div.classList.add("conteudo")
        div.innerHTML = descrição
        art.appendChild(div)
        main.appendChild(art)





        // DATA DE ENTREGA




        if (2 > minuto.toString().length) {
            var dataentrega = document.createTextNode("A data de entrega é: " + dia + " do " + mes + " as " + hora + ":0" + minuto)
        } else {
            var dataentrega = document.createTextNode("A data de entrega é: " + dia + " do " + mes + " as " + hora + ":" + minuto)
        }
        art.appendChild(dataentrega)
        main.appendChild(art)

        user_time_span = JSON.parse(window.localStorage.getItem('user_time_span'))
        if (dia - diaatual <= user_time_span) {
            art.style.border = "red  solid  3px"
            art.style.boxShadow = "0px 0px 50px 5px red"
        } else {
            art.style.border = "green  solid  3px"
            art.style.boxShadow = "0px 0px 50px 5px green"
        }
    }
}