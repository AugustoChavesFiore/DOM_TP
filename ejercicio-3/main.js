  const boton=document.getElementById('btncalcular');
  const $selector=document.getElementById('selector');
  let $resultado=document.getElementById('resultado')



boton.addEventListener('click',function(){
  let num1 = parseFloat( document.getElementById('numero1').value);
  let num2 = parseFloat( document.getElementById('numero2').value);
switch ($selector.value){
  case 'suma': $resultado.innerText= num1 + num2
  break;
  case 'resta':$resultado.innerText= num1-num2
  break ;
  case 'multiplicacion':$resultado.innerText= num1*num2
  break ;
  case 'division':
    if(num2!=0 ){
      $resultado.innerText= (num1/num2).toFixed(2)
    }
    else  {$resultado.innerText= "No se permite division por 0"};
  break ;
  default : $resultado.innerText="error"

}

}) 