const boton= document.getElementById('boton-color')
const text= document.getElementById('parrafo')


boton.addEventListener('click' ,function(){
    
    if (parrafo.classList.contains('color')){
        parrafo.classList.remove('color');
    }
    else{
        parrafo.classList.add('color');
    }
})

