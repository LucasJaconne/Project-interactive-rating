let buttons = document.querySelectorAll ('#buttons')
let b1 = document.querySelector ('#b1')
let b2 = document.querySelector ('#b2')
let b3 = document.querySelector ('#b3')
let b4 = document.querySelector ('#b4')
let b5 = document.querySelector ('#b5')
let submit = document.querySelector ('#button2')
let rate_point = document.querySelector ('#rate')
let container1 = document.querySelector ('#container1')
let container2 = document.querySelector ('#container2')
 

b1.addEventListener("click", clicar)

function clicar(){
    const active = document.querySelector ('#checked')
    if (active) {
        window.alert ('oi')
    }
}

