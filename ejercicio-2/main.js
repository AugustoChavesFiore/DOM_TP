const $cards =document.querySelector(".cards"),
  $template= document.getElementById('template-card').content,
  $fragment=document.createDocumentFragment(),
  cardscontent= [
    {
    imagen:"img/js.png",
    titulo: "JavaScript",
    informacion:"Lenguaje de programación para desarrollo web."},
    {
      imagen:"img/python.png",
      titulo: "Python",
      informacion:"Lenguaje de programación multipropósito y fácil de aprender."},
    {
      imagen:"img/php.png",
      titulo: "PHP",
      informacion:"Lenguaje de programación para desarrollo web del lado del servidor."},
    {
      imagen:"img/java.png",
      titulo: "Java",
      informacion:"Lenguaje de programación orientado a objetos y de propósito general."},
      {
        imagen:"img/csharp.png",
        titulo: "C#",
        informacion:"Lenguaje de programación orientado a objetos para desarrollo de aplicaciones .NET."},
      {
        imagen:"img/csharp.png",
        titulo: "C#",
        informacion:"Lenguaje de programación orientado a objetos para desarrollo de aplicaciones .NET."},
    ];


  cardscontent.forEach(el=>{
    $template.querySelector("img").setAttribute("src",el.imagen);
    $template.querySelector("img").setAttribute("alt",el.titulo);
    $template.querySelector("h5").textContent=el.titulo;
    $template.querySelector("p").textContent=el.informacion;

  let $clone=document.importNode($template,true);
  $fragment.appendChild($clone);

});

$cards.appendChild($fragment);

