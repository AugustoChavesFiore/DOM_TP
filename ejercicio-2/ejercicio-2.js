
let cards=[];


cards[0]=['img/python.png',"python","Lenguaje de programación multipropósito y fácil de aprender."];
cards[2]=['img/js.png',"JavaScrip","Lenguaje de programación para desarrollo web."];
cards[3]=['img/php.png',"PHP"," de programación para desarrollo Lenguajeweb del lado del servidor.."];
cards[4]=['img/ java.png',"JAVA","Lenguaje de programación orientado a objetos y de propósito general.."];
cards[5]=['img/c#.png',"C#","Lenguaje de programación orientado a objetos para desarrollo de aplicaciones .NET."];


const lenguages = [
    {
      titulo: "JavaScript",
      descripcion: "Lenguaje de programación para desarrollo web.",
      imagen:
        "https://ayudawp.com/wp-content/uploads/2017/01/javascript-logo-escudo.png",
    },
    {
      titulo: "Python",
      descripcion: "Lenguaje de programación multipropósito y fácil de aprender.",
      imagen:
        "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
    },
    {
      titulo: "PHP",
      descripcion:
        "Lenguaje de programación para desarrollo web del lado del servidor.",
      imagen: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png",
    },
    {
      titulo: "Java",
      descripcion:
        "Lenguaje de programación orientado a objetos y de propósito general.",
      imagen: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    },
    {
      titulo: "C#",
      descripcion:
        "Lenguaje de programación orientado a objetos para desarrollo de aplicaciones .NET.",
      imagen:
        "https://frad.es/wp-content/uploads/2021/09/csharp_original_logo_icon_146578.png",
    },
  ];
  
  const container = document.getElementById("container");
  
  container.innerHTML += lenguages
    .map((lenguage) => {
      return `
          <div class="card my-card d-flex" style="max-width: 18rem;">
              <img src="${lenguage.imagen}" class="card-img-top my-img" alt="${lenguage.titulo}">
              <div class="card-body ">
                  <h5>${lenguage.titulo}</h5>
                  <p>${lenguage.descripcion}</p>
              </div>
          </div>
      `;
    })
    .join("");
  