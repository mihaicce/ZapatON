      // Variables
      // obtenemos el UL
      const carrito = document.getElementById("carrito");
      //contenedor div de todas las card de zapatos
      const zapatos = document.getElementById("lista-zapatos");
      // seleccionamos el Id y especificamente el tbody donde se agregara los productos
      const listaZapatos = document.querySelector("#lista-carrito-factura tbody");



      cargarEventListeners();

//<!-- -----------------------OBTENER VALORES-------------------------------------- -->

//verificar que hay informacion en local storage y no repetir

    function cargarEventListeners(){



    // paso 7
    //Al cargar documento, mostrar local storage
    document.addEventListener("DOMContentLoaded", leerLocalStorage);

    }





function obtenerProductoLocalStorage(){
    let zapatosLS;
    

    //comprobamos si hay algo en local storage
    if(localStorage.getItem("zapatos")===null) {
        zapatosLS = [];
    }else{
        // lo que viene lo convierte a un arreglo porque viene como string
        zapatosLS = JSON.parse(localStorage.getItem("zapatos"));
    //console.log(zapatosLS);
    }
    return zapatosLS;
}

function obtenerTotalLS(){
    let totalFactura;

    if(localStorage.getItem("totalCheckout")===null) {
        totalFactura = [];
    }else{
        // lo que viene lo convierte a un arreglo porque viene como string
        totalFactura = JSON.parse(localStorage.getItem("totalCheckout"));
    //console.log(zapatosLS);
    }
    return totalFactura;
}


//<!-- ----------------------- MOSTRAR VALORES-------MODIFICAR PLANTILLA------------------------------- -->

    //Imprime los zapatos de local storage en el carrito
function leerLocalStorage(){
    let zapatosLS;
    zapatosLS = obtenerProductoLocalStorage();
    //console.log("leer"+zapatosLS);

    //console.log(zapatosLS)
    //RECORRER EL RREGLO
    zapatosLS.forEach(function(zapato){
        //construir el templateç
        //console.log("leer for"+zapato);
        //console.log(zapato.titulo);
        const row=document.createElement("tr");
        //Construiremos una plantilla para cada uno de los zapatos
        row.innerHTML=
        `
        <td>3</td>
        <td>${zapato.titulo}</td>
        <td>${zapato.precio}</td>
        <td>${zapato.precio}</td>
        
        
        
        `
        ;
        // arriba tambien se añadio una clase dinamicamente
        // añadir la informacion a la lista del carrito (imrimir dentro la lista)
        listaZapatos.appendChild(row);
    });
}

//continua paso 4
// Eliminando zapato del carrito en el DOM
//acceder al elemento con  e











 







/*function(){
  
    // Guardamos los inputs en una variable
    // var nombre = document.querySelector('.nombre');
    // var email = document.querySelector('.correo');
    // var expresion = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    // var mensaje = document.querySelector('.mensaje');
  
    // Validamos nuestros campos que no estén vacíos
    // El .value extrae los valores de ese input
    /*if(nombre.value == ""){ 
      // El .focus() permite enfocar el campo
       nombre.focus();
      alert("Por favor, escribe tu nombre completo.");
      return false;
       }else if(email.value == "" || !expresion.test(email)){
         email.focus();
         alert("Ingresa tu correo.");
         return false;
       }else if(mensaje.value == ""){
         mensaje.focus();
         alert("Escribe tu mensaje.");
         return false;
       }else{
         // Aquí puedes obtener los datos y realizar lo que quieras
         alert("¡Felicidades, has enviado tu mensaje!");
         console.log("Nombre: " + nombre.value + "\nMensaje: " + mensaje.value);
       }
  });*/