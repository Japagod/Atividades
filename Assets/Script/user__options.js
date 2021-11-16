var nav = document.getElementById("nav")
var onoff = false
var dark = false
document.getElementById("config").addEventListener("click", e => {
    if (onoff == false) {
        nav.style.display = "flex"
        onoff = true
    } else {
        nav.style.display = "none"
        onoff = false
    }
})

document.getElementById("light_dark").addEventListener("click", e => {
    if (dark == false) {
        document.getElementById("main").style.backgroundColor = "#121212"
        document.getElementById("light_dark").style.filter = "invert(96%) sepia(40%) saturate(0%) hue-rotate(292deg) brightness(113%) contrast(101%)"
        document.getElementById("nav").style.backgroundColor = "#121212"
        document.getElementById("nav_label").style.color = "#fff"



        dark =true
    } else {
        document.getElementById("main").style.backgroundColor = "#fff"
        document.getElementById("light_dark").style.filter = "invert(0%) sepia(3%) saturate(23%) hue-rotate(84deg) brightness(96%) contrast(100%)"
        document.getElementById("nav").style.backgroundColor = "#fff"
        document.getElementById("nav_label").style.color = "#121212"


        dark = false
    }
})

function userspan() {
    var user_time_span = document.getElementById("input_userspan").value
    window.localStorage.setItem('user_time_span', JSON.stringify(user_time_span))
    alert("Para aplicar as mudanças, reinicie a página")
    console.log(user_time_span)
}