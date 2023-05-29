
let formulario= document.getElementById('formulario');


const operadores = {
  suma: 1,
  resta: 2,
  multiplicacion: 3,
  division: 4,
};

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    let formulario = new FormData(e.target);
    let numero1=Number(formulario.get("n1"));
    let numero2=Number(formulario.get("n2"));
    let operadores=Number(formulario.get('selector'))
    let resultado=document.getElementById('resultado');

    switch (operadores){
        case operadores.suma:
            resultado.innerHTML=Number(numero1)+Number(numero2);
            break;
        case operadores.resta:
            resultado.innerHTML=Number(numero1)-Number(numero2);
            break;
        case operadores.multiplicacion:
            resultado.innerHTML=Number(numero1)*Number(numero2);
            break;
        case operadores.division:
            resultado.innerHTML=Number(numero1)/Number(numero2);
            break;

    }
    
}
)
