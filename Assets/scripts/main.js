// efeito hide
var att1a = document.getElementById("att1a")
var att1 = document.getElementById("att1")
var att2a = document.getElementById("att2a")
var att2 = document.getElementById("att2")
var att3a = document.getElementById("att3a")
var att3 = document.getElementById("att3")

att1a.addEventListener("mouseenter", e => {
    att1.style.opacity = "1"
})
att1a.addEventListener("mouseleave", e => {
    att1.style.opacity = "0"
})

att2a.addEventListener("mouseenter", e => {
    att2.style.opacity = "1"
})
att2a.addEventListener("mouseleave", e => {
    att2.style.opacity = "0"
})

att3a.addEventListener("mouseenter", e => {
    att3.style.opacity = "1"
})
att3a.addEventListener("mouseleave", e => {
    att3.style.opacity = "0"
})

// Animação das paginas

var [pag1,pag2,pag3] = [document.getElementById("divatt1"),document.getElementById("divatt2"),document.getElementById("divatt3")]
var home = document.getElementById("home")
var atts = document.getElementById("atts")
var conteudo = document.querySelector(".conteudo")
        // Pagina 1

att1a.addEventListener("click", e => {
    pag1.style.animation = "anim-entrada .5s forwards"
    atts.style.pointerEvents = "all"
    pag1.style.display = "flex"
    conteudo.style.opacity = "0"
    setTimeout(e => { 
        conteudo.style.opacity = "1"
        home.style.display = "flex"
    }, 600)
})
home.addEventListener("click", e => {
    pag1.style.animation = "anim-saida .2s forwards"
    atts.style.pointerEvents = "none"
    conteudo.style.opacity = "0"
    setTimeout(e => { 
        pag1.style.display = "none"
    }, 200)
    home.style.display = "none"
})
        // Pagina 2
att2a.addEventListener("click", e => {
    pag2.style.animation = "anim-entrada .5s forwards"
    atts.style.pointerEvents = "all"
    pag2.style.display = "flex"
    // conteudo.style.opacity = "0"
    setTimeout(e => { 
        conteudo.style.opacity = "1"
        home.style.display = "flex"
    }, 600)
})
home.addEventListener("click", e => {
    pag2.style.animation = "anim-saida .2s forwards"
    atts.style.pointerEvents = "none"
    conteudo.style.opacity = "0"
    setTimeout(e => { 
        pag2.style.display = "none"
    }, 200)
    home.style.display = "none"
})
        // Pagina 3
att3a.addEventListener("click", e => {
    pag3.style.animation = "anim-entrada .5s forwards"
    atts.style.pointerEvents = "all"
    pag3.style.display = "flex"
    conteudo.style.opacity = "0"
    setTimeout(e => { 
        conteudo.style.opacity = "1"
        home.style.display = "flex"
    }, 600)
})
home.addEventListener("click", e => {
    pag3.style.animation = "anim-saida .2s forwards"
    atts.style.pointerEvents = "none"
    conteudo.style.opacity = "0"
    setTimeout(e => { 
        pag3.style.display = "none"
    }, 200)
    home.style.display = "none"
})