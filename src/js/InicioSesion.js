let Nombre=document.getElementById("Nombreperson");
let Correo=document.getElementById("Emailregistro");
let Correoconfirm=document.getElementById("Emailconfirm");
let Telefono=document.getElementById("Phoneregistro");
let Contrasenajs=document.getElementById("Contrasena");
let ConfirmContrasenajs=document.getElementById("Contrasenaconfirm");
let Politicajs=document.getElementById("Politicas");
let Terminosjs=document.getElementById("Terminos");

<<<<<<<< HEAD:src/js/InicioSesion.js
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,60}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,20}$/, // 4 a 20 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{10,10}$/ // 10  numeros.
}

const campos = {
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
========
let datos = [];
let contador=0;

function validarNombre ()
{
    if(Nombre.value.length==0)
    {
        return false;
    } else if(Nombre.value.length<3)
    {
        return false;
    } else if(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]/.test(Nombre.value))
    {    
    return true;
    }
}

function validarCorreo ()
{
    if(/^[a-zA-ZñÑ_0-9._%+-]+@(?:[a-zA-ZÑñ_0-9.-]+\.)[a-zA-Z]{2,6}/.test(Correo.value))
    {
        return true;
    }
    if(!isNaN(Correo[0]))
    {
        return false;
    }
    else return false;
}

function validarCorreoconfirm ()
{
    if(Correoconfirm.value.length==0)
    {
        return false;
    } else if(Correo.value !== Correoconfirm.value)
    {
        return false;
    }
    return true;
>>>>>>>> fccd2a26917590989078c795066666b502470e58:VengadoresDeLaLimpieza/src/js/Registrarse.js
}

function validarTelefono ()
{
    if(Telefono.value.length==0)
    {
        return false;
    } else if(isNaN(Telefono.value))
    {
        return false;
    } else if(Telefono.value.length<10 || Telefono.value.length>10)
    {
        return false;
    } else if(/^[0-9]+$/.test(Telefono.value)) /*CONDICION QUE SOLO ACEPTA NÚMEROS DE 0 AL 9 DE INICIO A FINAL, TIENE QUE SER UNO O MÁS*/
    {    
    return true;
    }
}

function validarContrasenajs ()
{
    if(/^(?=.*[A-ZÑ])(?=.*[a-zñ])(?=.*[0-9])[a-zA-ZÑñ0-9\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?]{8,16}/.test(Contrasenajs.value))
    {
        return true;
    }
    else return false;
}

function validarConfirmContrasenajs ()
{
    if(ConfirmContrasenajs.value.length==0)
    {
        return false;
    } else if(Contrasenajs.value !==ConfirmContrasenajs.value)
    {
        return false;
    }
    return true;
}
 function validarTerminosjs ()
{
    if(Terminosjs.checked)
    {
        return true;}
}

function validarPoliticajs ()
{
    if(Politicajs.checked)
    {
        return true;
    }
} 

let Registro=document.getElementById("enviar-registro");
Registro.addEventListener("click", (event)=>
{
    event.preventDefault();

    if((!validarNombre())||(!validarCorreo())||(!validarTelefono())||(!validarContrasenajs())||(!validarConfirmContrasenajs()))
    {
        let listaregistro="";
        if(!validarNombre())
        {
            Nombre.style.border="red thin solid";
            listaregistro+="<li>Se debe escribir un Nombre válido con al menos 3 letras</li>"
        }else {Nombre.style.border="";}

        if(!validarTelefono())
        {
            Telefono.style.border="red thin solid"
            listaregistro+="<li>Se debe escribir un Número válido</li>"
        }else{Telefono.style.border="";}

        if(!validarCorreo())
        {
            Correo.style.border="red thin solid"
            listaregistro+="<li>Se debe escribir un Correo válido</li>"
        }else{Correo.style.border="";}

        if(!validarContrasenajs())
        {
            Contrasenajs.style.border="red thin solid"
            listaregistro+="<li>Se debe escribir una contraseña con al menos una letra mayúscula, una minúscula y una letra</li>"
        }else{Contrasenajs.style.border="";}

        if(!validarConfirmContrasenajs())
        {
            ConfirmContrasenajs.style.border="red thin solid"
            listaregistro+="<li>Se debe escribir una Contraseña válida y/o no coinciden</li>"
        }else{ConfirmContrasenajs.style.border="";}

        document.getElementById("alertValidTextregistro").innerHTML=`
        Los campos deben ser llenados correctamente. <ul>${listaregistro}</ul>`;
        
        document.getElementById("alertValidacionregistro").style.display="block";

        setTimeout(function()
        {
            document.getElementById("alertValidacionregistro").style.display="none";
        }, 10000);

        return false;
    }

    document.getElementById("alertValidacionregistro").style.display="none";
        Swal.fire({
            icon: 'success',
            title: '¡REGISTRO EXITOSO!',
            showConfirmButton: false,
            timer: 2000
          })

    contador++;
  /*localStorage.setItem("Numerodeusuarios", contador);
    localStorage.setItem("Nombre",Nombre);
    localStorage.setItem("Apellido Materno",AMaterno);
    localStorage.setItem("Apellido Paterno",APaterno);
    localStorage.setItem("Correo",Correo);
    localStorage.setItem("Telefono",Telefono);
    localStorage.setItem("Contraseña",Contrasenajs);
*/
    //JSON
   let elemento=`{"id":"${contador}", 
        "Nombre":"${Nombre.value}", 
        "Correo":"${Correo.value}",
        "Telefono":"${Telefono.value}",
        "Contraseña":"${Contrasenajs.value}"
    }`; 
    datos.push(JSON.parse(elemento));
   localStorage.setItem("elementosTabla", JSON.stringify(datos));
   console.log(datos);
//Registro

Nombre.value="";
Correo.value="";
Telefono.value="";
Contrasenajs.value="";
ConfirmContrasenajs.value="";

Nombre.style.border="";
Correo.style.border="";
Telefono.style.border="";
Contrasenajs.style.border="";
ConfirmContrasenajs.style.border="";


}
); //Enviar

Nombre.addEventListener("blur", (event)=>
{
event.target.value=event.target.value.trim();
});

<<<<<<<< HEAD:src/js/InicioSesion.js
formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.nombre && campos.password && campos.correo && campos.telefono){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});

let correoIS = document.getElementById("correo");
let passwordIS = document.getElementById("password");



localStorage.getItem("elementos")
    let iniciouser = JSON.parse(localStorage.getItem("elementos"));

    btnCrearCuenta.addEventListener("click", (event)=> {
        event.preventDefault();
    const result = iniciouser.filter(elementos => elementos.Correo == correoIS.value && 
        elementos.Contraseña == passwordIS.value);
        if (result[0]) {
            Swal.fire({
              icon: 'success',
              title: '¡INICIO DE SESIÓN EXITOSO!',
              showConfirmButton: false,
              timer: 2000
            })
            window.location='../pages/Productos.html';  
              return;
            } else if (!result[0]) {
              Swal.fire({
                icon: 'error',
                title: 'Los datos no coinciden',
                text: 'Intenta de nuevo',
              });
              return;
            }
        });
========
Correo.addEventListener("blur", (event)=>{
event.target.value=event.target.value.trim();
});

Telefono.addEventListener("blur", (event)=>{
    event.target.value=event.target.value.trim();
    });

Contrasenajs.addEventListener("blur", (event)=>{
    event.target.value=event.target.value.trim();
    });

ConfirmContrasenajs.addEventListener("blur", (event)=>{
    event.target.value=event.target.value.trim();
    });
>>>>>>>> fccd2a26917590989078c795066666b502470e58:VengadoresDeLaLimpieza/src/js/Registrarse.js
