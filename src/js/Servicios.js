function addItem(item){
    const itemHTML = `<div class="card-deck">
    <div class="card" style="width: 18rem;">
    <img class="cont-imagen" src="${item.img}" class="card-img-top"  alt="..." >
    <div class="card-body">
    <div id="cinco-estrellas">
    <!--5 estrellas-->
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg> 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg> 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg> 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg> 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg> 
    </div>
    <h5 class="card-title">${item.nombre}</h5>
    <p class="card-precio">${item.precio}</p>
    <hr class="precio-barra"/>
    <p class="card-sku">${item.sku}</p>
    <p>Ingresa el Día de tu Evento<input type="date"></input></p>
    <p>Ingresa la Hora de Limpieza<input type="time"></input></p>
    <hr class="barraFecha"/>
    <button type="button" class="btn btn-primary btn-lg btn-block btnAgregar">Agregar</button>

    </div>
</div>
</div>`;
    const itemsContainer = document.getElementById("lista-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem({'nombre':'Paquete Basico, hasta 70m²',
    'img':'/src/imagenes/paquete1.png',
    'precio': '$1,499.00',
    'sku':'SKU: PAENT10'});

addItem({'nombre':'Paquete Deluxe, hasta 110m²',
    'img':'/src/imagenes/paquete2.png',
    'precio': '$2,599.00',
    'sku':'SKU: PAEME25'});

addItem({'nombre':'Paquete Premium, hasta 200m²',
    'img':'/src/imagenes/paquete3.png',
    'precio': '$3,999.0',
    'sku':'SKU: PASUM40'});

let btnMas = document.getElementsByClassName("btnGreen");
let count = document.getElementsByClassName("input");


// btnMas.addEventListener ("click", (event) => {  // Evento al que voy a responder
//     event.preventDefault();    // quiero prevenir accion que se hace por default

//     for (let index = 0; index < ; index++) {
//         const element = array[index];
        
//     }


btnMas.onclick = function() {
    count.value++;
};

    // if ( (! validarNombre()) || (! validarCantidad())) {  // si este es falso o este otro es falso return false
        
    //     let lista="";
    //     if (!validarNombre()) {
    //         txtNombre.style.border= "red thin solid";
    //         lista += "<li>Se debe escribir un nombre válido</li>"
    //     }
    //     if (!validarCantidad()) {
    //         txtNumber.style.border= "red thin solid";
    //         lista += "<li>Se debe escribir una cantidad válida</li>"   // Se cambió el mensaje con backticks
    //     }


