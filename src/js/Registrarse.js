const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
let datos=[];
let contador=0;

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ_.+-\s]{3,60}$/, // Letras y espacios, pueden llevar acentos.
	password:/^[a-zA-Z0-9-ZÀ-ÿ_.:=$+-?¿¡!/%#"*())\s]{4,20}$/, // 4 a 20 digitos.
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
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value.trim())){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value.trim()){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	}

	else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


let nombre = document.getElementById("nombre");
let telefono = document.getElementById("telefono");
let correo = document.getElementById("correo");
let password = document.getElementById("password");
let password2=document.getElementById("password2");
let btnCrearCuenta=document.getElementById("btnCrearCuenta");

btnCrearCuenta.addEventListener("click", (event)=> {
event.preventDefault();
if(campos.nombre && campos.password && campos.correo && campos.telefono){
	Swal.fire({
		icon: 'success',
		title: '¡REGISTRO EXITOSO!',
		showConfirmButton: false,
		timer: 2000
	  })
	contador++;
    //JSON
   let elemento=`{"id":"${contador}", 
        "Nombre":"${nombre.value}", 
        "Correo":"${correo.value}",
        "Telefono":"${telefono.value}",
        "Contraseña":"${password.value}"
    }`; 
    datos.push(JSON.parse(elemento));
   localStorage.setItem("elementos", JSON.stringify(datos));
   window.location='../pages/InicioSesion.html';     
   return;
}
else{ 
Swal.fire({
	icon: 'error',
	title: 'Por favor rellena los campos correctamente',
	text: 'Intenta de nuevo',
	
  });
  setTimeout (function(){
  window.location.reload();
  }, 2000
  )
}

nombre.value = "";
telefono.value = "";
correo.value = "";
password.value = "";
password2.value = "";
nombre.focus();


});
