
// let formulario= document.getElementById('formulario');


// const operadores = {
//   suma: 1,
//   resta: 2,
//   multiplicacion: 3,
//   division: 4,
// };

// formulario.addEventListener("submit", function(e){
//     e.preventDefault();
//     let formulario = new FormData(e.target);
//     let numero1=Number(formulario.get("n1"));
//     let numero2=Number(formulario.get("n2"));
//     let operadores=Number(formulario.get('selector'))
//     let resultado=document.getElementById('resultado');

//     switch (operadores){
//         case operation.suma:
//             resultado.innerHTML=Number(numero1)+Number(numero2);
//             break;
//         case operation.resta:
//             resultado.innerHTML=Number(numero1)-Number(numero2);
//             break;
//         case operation.multiplicacion:
//             resultado.innerHTML=Number(numero1)*Number(numero2);
//             break;
//         case operation.division:
//             resultado.innerHTML=Number(numero1)/Number(numero2);
//             break;
//         default:resultado.innerHTML = "Error"

//     }
    
// }
// )



let formulario = document.getElementById("formulario");

const operations = {
  suma: 1,
  resta: 2,
  multiplicacion: 3,
  division: 4,
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let formulario = new FormData(e.target);

  let num1 = Number(formulario.get("num1"));
  let num2 = Number(formulario.get("num2"));

  let operator = Number(formulario.get("selector"));

  let resultado = document.getElementById("resultado");

  switch (operator) {
    case operations.suma:
      resultado.innerHTML = Number(num1) + Number(num2);
      break;
    case operations.resta:
      resultado.innerHTML = Number(num1) - Number(num2);
      break;
    case operations.multiplicacion:
      resultado.innerHTML = Number(num1) * Number(num2);
      break;
    case operations.division:
        if ( Number(num2)===0){
            resultado.innerHTML ="No es posible divir por 0";
        }
        else{

            resultado.innerHTML = (Number(num1) / Number(num2)).toFixed(2);
        }
      break;
    default:
      resultado.innerHTML = "Error";
  }
});
