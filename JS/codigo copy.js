const login = document.getElementById('btn-login');
const names = document.getElementById('DropdownFormName');
const password = document.getElementById('DropdownFormPassword');
const saludar = document.getElementById('saludar');
const error =document.getElementById('error')
const cerrar = document.querySelector("#btn-cerrar-login");

login.addEventListener('click',validar);

function validar(){

     let form_nombre = names.value;
     let form_password= password.value;
     if(form_nombre!=null && form_password !=undefined){
        return swal("Uppss!!  Usuario no encontrado","Registrate" ,"error")
     
   
    }
    // localStorage.setItem('logeado', form_nombre);
    // console.log(form_nombre);
 
    //  let nombre= localStorage.getItem('logeado');
     
    //  console.log(nombre);
    //  saludar.innerHTML = `¡Hola, ${nombre}`;
     
    }

const apellido = document.querySelector('#DropdownFormlastName');
const direccion = document.querySelector("#DropdownFormdirection");  
const names1 = document.getElementById('DropdownFormName1');
const password1 = document.getElementById('DropdownFormPassword1');
const email = document.getElementById('DropdownFormEmail1');
const btn_usuario = document.getElementById('btn-usuario')

btn_usuario.addEventListener('click',registrousuario);

      

function registrousuario(){
    const aUsuario={
        names1:names1.value,
        apellido: apellido.value,
        direccion:direccion.value,
        email: email.value,
        passwowd1:password1.value

    };
    window.location.href="../ES/cuenta.html"
    console.log(aUsuario);
    let jsonUsuario = localStorage.setItem("registro",JSON.stringify(aUsuario));
    
    console.log(jsonUsuario);
    
    cargar();
    
}
function cargar(){
    let usuario =localStorage.getItem("registro",JSON.parse);
        if(usuario===null){
            usuario='';
        }else{
            saludar.innerHTML = `¡Hola, ${usuario.names1 }¡`
            console.log("no hago nada")
        }
}