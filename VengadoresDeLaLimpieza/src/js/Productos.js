const productosLimpieza = [{"nombre" : "Kit de Limpieza Completo Mascota Feliz",
"img" : "/src/imagenes/1_kit1_EDITADO.jpg",
"precio" : "587.00",
"sku" : "DW195B3"}, 
{"nombre" : "Scotch-Brite Guantes de Cocina, Medianos",
"img" : "/src/imagenes/2_guant1_EDITADO.jpg",
"precio" : "31.82",
"sku" : "MMS195S9"}, 
{"nombre" : "Scotch-Brite Paño Microfibra de Colores",
"img" : "/src/imagenes/3_trapo1_EDITADO.jpg",
"precio" : "13.00",
"sku" : "JG953M4"}, 
{"nombre" : "Trapeador Plano Atrapa Polvo Microfibra",
"img" : "/src/imagenes/4_trapeador1_EDITADO.jpg",
"precio" : "249",
"sku" : "LM347G1"}, 
{"nombre" : "Recogedor de Basura Rojo Multiusos",
"img" : "/src/imagenes/5_recoge1_EDITADO.jpg",
"precio" : "200.00",
"sku" : "PPV110T7"}, 
{"nombre" : " Kit Escoba Exterior y Atrapa Pelo ",
"img" : "/src/imagenes/6_escoba1_EDITADO.jpg", 
"precio" : "169.00", 
"sku" : "WPD477S3"}, 
{"nombre" : "Scotch-Brite Trapeador Extra Largo",
"img" : "/src/imagenes/7_traplargo1_EDITADO.jpg",
"precio" : "115.20",
"sku" : "MFL024B1"}, 
{"nombre" : "Stainless Steel Toallas 30CT Limpieza Profunda",
"img" : "/src/imagenes/8_toallas1_EDITADO.jpg",
"precio" : "240.00",
"sku" : "JPE94Y5"}, 
{"nombre" : "Jalador más Paño Suelos con Microfibra", 
"img" : "/src/imagenes/9_jalador1_EDITADO.jpg",
"precio" : "121.00",
"sku" : "JLR545T6"}, 
{"nombre" : "Cubeta 20 litros Exprimidor y Separador de Agua",
"img" : "/src/imagenes/10_cubeta1_EDITADO.jpg",
"precio" : "1,260.00",
"sku" : "RKQ35H1"}];

function addItem(item){
    const itemHTML= `<div class="card-deck">
    <div class="card" style="widt h: 18rem;">
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
    <div id="precio-sku-contador">
    <p class="card-precio">$${item.precio}</p>
    <hr class="precio-barra"/>
    <p class="card-sku">SKU: ${item.sku}</p>
    <a type="submit" class="btn btn-primary btnGreen">+</a>
    <a type="submit" class="btn btn-primary btnRed"><b>-</b></a>
    <input type="number" value="" class="contador" id="inputContador" name="contadorProductos">
    </div>
    <button type="button" class="btn btn-primary btn-lg btn-block btnAgregar">Agregar</button>

    </div>
</div>
</div>`;
    const itemsContainer = document.getElementById("lista-items");
    itemsContainer.innerHTML += itemHTML;
}

if(localStorage.length == 0){
    window.localStorage.setItem("productosLimpieza", JSON.stringify(productosLimpieza));
    window.addEventListener("load",function() {
        productos = JSON.parse(localStorage.getItem("productosLimpieza"));
        productos.forEach(element => {
            addItem(element);
        });
    });
}

if(localStorage.length > 0){
    window.addEventListener("load",function() {
        productos = JSON.parse(localStorage.getItem("productosLimpieza"));
        productos.forEach(element => {
            addItem(element);
        });
    });
}

btnMas = document.getElementsByClassName("btnGreen");
contadorDelInput = document.getElementById("inputContador");
contador = 0;


btnMas.addEventListener("click", (event)=>{
    contador++;
    contadorDelInput = contador;

})

console.log("valor contador: " + contadorDelInput);