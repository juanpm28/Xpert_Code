const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const expresiones = {
	nombre: /^[a-zA-Z0-9-ZÀ-ÿ-\s]{3,60}$/, // nombre=producto Letras, números y espacios, pueden llevar acentos.
	sku: /^[A-Z0-9-ZÀ-ÿ\s]{8,12}$/, // SKU Letras, numeros, guion y guion_bajo
    precio : /^[0-9.\s]{1,6}$/, // Precio núemros y punto . 
}
const campos = {
	nombre: false,
    sku: false,
    precio : false
}
const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
        case "sku":
			validarCampo(expresiones.sku, e.target, 'sku');
		break;
        case "precio":
			validarCampo(expresiones.precio , e.target, 'precio');
		break;
	}
}
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
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
} //puntero del mouse
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

let nombre = document.getElementById("nombre");
let sku = document.getElementById("sku");
let precio = document.getElementById("precio");
let imagen = document.getElementById("imagen");

botonEnviar.addEventListener("click", (event)=> {
event.preventDefault();
let registro = `
{"nombre" : "${nombre.value}",
"img" : "${imagen.value}",
"precio" : "${precio.value}",
"sku" : "${sku.value}"}`;

//DEl JSON a Productos De Limpieza
tmp = JSON.parse(localStorage.getItem("productosLimpieza"));
tmp.push(JSON.parse(registro));

// Crear de nuevo el JSON
localStorage.setItem("productosLimpieza", JSON.stringify(tmp));

});

// Imagen
let fileImage = document.getElementById('fileImage');
	let btnFake = document.getElementById('btnFake');
	let imageFile = document.getElementById('imageFile');
	let selectImages = document.getElementById('selectImages');
	let store = {'names':[], 'data': []};
	window.addEventListener('load', function(e){
		console.log("store.data:" + store.data);
		console.log(localStorage.getItem("imgsData"));
		if ( JSON.parse(localStorage.getItem("imgsData"))!=null)
			store = JSON.parse(localStorage.getItem("imgsData"));
		fillSelect();
	});
	function fillSelect(){
		if (store.data.length>0) {
			selectImages.options.length = 0; // clear Select
			let optiontmp = document.createElement("option");
				optiontmp.text = "Selecciona una imagen para visualizar:"
				optiontmp.value = -1;
				selectImages.add(optiontmp); 
			for (let i=0; i < store.data.length; i ++){
				let option = document.createElement("option");
				option.text = store.names[i];
				option.value = i;
				selectImages.add(option); 
			}//for i
		}//if store != null
		console.log(store);
	}//fillSelect
	btnFake.addEventListener('click', function(){
		fileImage.click();
    });
    fileImage.addEventListener('change', function(){
        previewFile('imageFile', 'fileImage', 'inputFile' )
        //previewFile(id imagen, input type file , textArea);
    });
		//previewFile(id imagen, input type file , textArea);
		function previewFile(img, inputFile, input) {
			var preview = document.getElementById(img);
			var file    = document.getElementById(inputFile).files[0];
			var reader  = new FileReader();

			reader.addEventListener("load", function () {
				console.log(store.data.length);
				store.data[store.data.length] = reader.result;
				store.names[store.names.length] =file.name;
				console.table(store);
				document.getElementById(input).value = reader.result;
		  		preview.src = reader.result;
				localStorage.setItem("imgsData", JSON.stringify(store));
				fillSelect();
		  	}, false);
		  	if (file) {
		    	reader.readAsDataURL(file);
		  	}// file
		}// previewFile 
		selectImages.addEventListener("change", function(){
			imageFile.src = store.data[selectImages.options[selectImages.selectedIndex].value];
		});
		
