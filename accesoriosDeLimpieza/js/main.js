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
    <a type="submit" class="btn btn-primary btnGreen">+</a>
    <a type="submit" class="btn btn-primary btnRed"><b>-</b></a>
    <input type="number" value="0" class="contador" name="contadorProductos">
    <button type="button" class="btn btn-primary btn-lg btn-block btnAgregar">Agregar</button>

    </div>
</div>
</div>`;
    const itemsContainer = document.getElementById("lista-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem({'nombre':'Kit de Limpieza Completo Mascota Feliz',
    'img':'./img/1_kit1_EDITADO.jpg',
    'precio': '$587.00',
    'sku':'SKU: DW195B3'});

addItem({'nombre':'Scotch-Brite Guantes de Cocina, Medianos',
    'img':'./img/2_guant1_EDITADO.jpg',
    'precio': '$31.82',
    'sku':'SKU: MMS195S9'});

addItem({'nombre':'Scotch-Brite Paño Microfibra de Colores',
    'img':'./img/3_trapo1_EDITADO.jpg',
    'precio': '$13.00',
    'sku':'SKU: JG953M4'});

addItem({'nombre':'Trapeador Plano Atrapa Polvo Microfibra',
    'img':'./img/4_trapeador1_EDITADO.jpg',
    'precio': '$249',
    'sku':'SKU: LM347G1'});

addItem({'nombre':'Recogedor de Basura Rojo Multiusos',
    'img':'./img/5_recoge1_EDITADO.jpg',
    'precio': '$200.00',
    'sku':'SKU: PPV110T7'});

addItem({'nombre':' Kit Escoba Exterior y Atrapa Pelo ',
    'img':'./img/6_escoba1_EDITADO.jpg', 
    'precio': '$169.00', 
    'sku':'SKU: WPD477S3'});

addItem({'nombre':'Scotch-Brite Trapeador Extra Largo',
    'img':'./img/7_traplargo1_EDITADO.jpg',
    'precio': '$115.20',
    'sku':'SKU: MFL024B1'});

addItem({'nombre':'Stainless Steel Toallas 30CT Limpieza Profunda',
    'img':'./img/8_toallas1_EDITADO.jpg',
    'precio': '$240.00',
    'sku':'SKU: JPE94Y5'});

addItem({'nombre':'Jalador más Paño Suelos con Microfibra', 
    'img':'./img/9_jalador1_EDITADO.jpg',
    'precio': '$121.00',
    'sku':'SKU: JLR545T6'});

addItem({'nombre':'Cubeta 20 litros Exprimidor y Separador de Agua',
    'img':'./img/10_cubeta1_EDITADO.jpg',
    'precio': '$1,260.00',
    'sku':'SKU: RKQ35H1'});


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


