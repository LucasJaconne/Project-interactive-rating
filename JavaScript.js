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

 

function carregar(){
        b1.style.backgroundColor = ''
        b2.style.backgroundColor = ''
        b3.style.backgroundColor = ''
        b4.style.backgroundColor = ''
        b4.style.backgroundColor = ''
}

b1.addEventListener("click", changecor)

function changecor(){
        b1.style.backgroundColor = 'hsl(25, 97%, 53%)'
        b2.style.backgroundColor = ''
        b3.style.backgroundColor = ''
        b4.style.backgroundColor = ''
        b5.style.backgroundColor = ''
}

b2.addEventListener("click", changecor1)

function changecor1(){
        b2.style.backgroundColor = 'hsl(25, 97%, 53%)'
        b1.style.backgroundColor = ''
        b3.style.backgroundColor = ''
        b4.style.backgroundColor = ''
        b5.style.backgroundColor = ''
}

b3.addEventListener("click", changecor2)

function changecor2(){
        b3.style.backgroundColor = 'hsl(25, 97%, 53%)'
        b1.style.backgroundColor = ''
        b2.style.backgroundColor = ''
        b4.style.backgroundColor = ''
        b5.style.backgroundColor = ''
}

b4.addEventListener("click", changecor3)

function changecor3(){
        b4.style.backgroundColor = 'hsl(25, 97%, 53%)'
        b1.style.backgroundColor = ''
        b3.style.backgroundColor = ''
        b2.style.backgroundColor = ''
        b5.style.backgroundColor = ''
}

b5.addEventListener("click", changecor4)

function changecor4(){
        b5.style.backgroundColor = 'hsl(25, 97%, 53%)'
        b1.style.backgroundColor = ''
        b3.style.backgroundColor = ''
        b2.style.backgroundColor = ''
        b4.style.backgroundColor = ''
}




submit.addEventListener("click", clicar)

function clicar(){

        cont1 = document.querySelector('#container1')
        cont2 = document.querySelector('#container2')

        
        
        let radio = document.querySelector('input[name="radio"]:checked')

        if (radio.checked) {
               let select = radio.value

                let p = document.querySelector('#p_selected')
                
                p.innerHTML = `You selected ${radio.value} out of 5`

                cont1.style.display = 'none'
                cont2.style.display = 'block'
                

        
        }

        
        
        
        
    
}

