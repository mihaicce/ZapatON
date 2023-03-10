      // Variables

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




//<!-- ----------------------- MOSTRAR VALORES-------MODIFICAR PLANTILLA------------------------------- -->

    //Imprime los zapatos de local storage en el carrito
function leerLocalStorage(){
    let zapatosLS;
    zapatosLS = obtenerProductoLocalStorage();

    // let totalEnLocalStorage;
    // totalEnLocalStorage = obtenerTotalLS();


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
        <td>1</td>
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


//Capturar datos pagina de registo
// vamos a capturar los datos para cogerlos del local storage

let nombreApellidoFactura = document.getElementById('nombreFactura');
let direccionFactura = document.getElementById("direccionFactura");
let emailFactura = document.getElementById("emailFactura");

let totalFactura = document.getElementById("total-en-factura");
let subtotalFactura = document.getElementById("subtotal-en-factura");
let ivaEnFactura = document.getElementById("IVA-en-factura");

let totalLS = JSON.parse(localStorage.getItem("totalCheckout"));
let iva = (totalLS * 21)/100;
let subtotal = totalLS - iva;

totalFactura.textContent ="€ " + totalLS +".00";
ivaEnFactura.textContent = "€ " + iva ;
subtotalFactura.textContent = "€ " + subtotal ;


obtenerUsuarioFactura();

function obtenerUsuarioFactura(){
    let datos_usuario = JSON.parse(localStorage.getItem("registro"));

   //comprobamos si hay algo en local storage
     if(localStorage.getItem("registro")===null){
         datos_usuario =[" "];
        console.log("que hay  aqui "+datos_usuario);
     }else{
    
    console.log("Obteniendo datos exitosamente"+datos_usuario)
   
     console.log(datos_usuario.names1);
   return datos_usuario;  
 }}


function mostrarInformacionUsuario(){
let datos_usuario = obtenerUsuarioFactura();
// console.log(datos_usuario.names1);
// console.log(datos_usuario.apellido);
// console.log(datos_usuario.direccion);
// console.log(datos_usuario.email);

nombreApellidoFactura.textContent = datos_usuario.names1 + " " + datos_usuario.apellido;
direccionFactura.textContent =datos_usuario.direccion;
emailFactura.textContent = datos_usuario.email;

}

mostrarInformacionUsuario();