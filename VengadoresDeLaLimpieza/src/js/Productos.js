const productosLimpieza = [{"nombre" : "Kit de Limpieza Completo Mascota Feliz",
"img" : "/src/imagenes/1_kit.jpg",
"precio" : "587.00",
"sku" : "DW195B3"}, 
{"nombre" : "Scotch-Brite Guantes de Cocina, Medianos",
"img" : "/src/imagenes/2_guantes.jpg",
"precio" : "31.82",
"sku" : "MMS195S9"}, 
{"nombre" : "Scotch-Brite Paño Microfibra de Colores",
"img" : "/src/imagenes/3_microfibra.jpg",
"precio" : "13.00",
"sku" : "JG953M4"}, 
{"nombre" : "Trapeador Plano Atrapa Polvo Microfibra",
"img" : "/src/imagenes/4_trapeadorazul.jpg",
"precio" : "249",
"sku" : "LM347G1"}, 
{"nombre" : "Recogedor de Basura Rojo Multiusos",
"img" : "/src/imagenes/5_recogedor.jpg",
"precio" : "200.00",
"sku" : "PPV110T7"}, 
{"nombre" : " Kit Escoba Exterior y Atrapa Pelo ",
"img" : "/src/imagenes/6_escoba.jpg", 
"precio" : "169.00", 
"sku" : "WPD477S3"}, 
{"nombre" : "Scotch-Brite Trapeador Extra Largo",
"img" : "/src/imagenes/7_trapeadorlargo.jpg",
"precio" : "115.20",
"sku" : "MFL024B1"}, 
{"nombre" : "Stainless Steel Toallas 30CT Limpieza Profunda",
"img" : "/src/imagenes/8_toallas.jpg",
"precio" : "240.00",
"sku" : "JPE94Y5"}, 
{"nombre" : "Jalador más Paño Suelos con Microfibra", 
"img" : "/src/imagenes/9_jalador.jpg",
"precio" : "121.00",
"sku" : "JLR545T6"}, 
{"nombre" : "Cubeta 20 litros Exprimidor y Separador de Agua",
"img" : "/src/imagenes/10_cubeta.jpg",
"precio" : "1,260.00",
"sku" : "RKQ35H1"}];

function addItem(item, con){
    
    const itemHTML= `<div class="card-deck">
    <div class="card" style="widt h: 18rem;">
    <img class="cont-imagen" src="${item.img}" class="card-img-top"  alt="LimpiaClean" >
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
    <button onclick="press(3` + con + `,1)" class="btn btn-primary btnGreen">+</button>
    <button onclick="press(3` + con + `,0)" class="btn btn-primary btnRed"><b>-</b></button>
    <input id="3` + con + `" type="text" class="contador" style="text-align: center;" value="" placeholder="0">
    </div>
    <a href="https://www.paypal.com/webapps/shoppingcart/error?flowlogging_id=f116914a394fa&code=GENERIC_ERROR&mfid=1656979172865_f116914a394fa" onclick="mostrar()"><button type="button" class="btn btn-primary btn-lg btn-block btnAgregar" onclick="mostrar()">Comprar</button></a>
    </div>
</div>
</div>
`;
    const itemsContainer = document.getElementById("lista-items");
    itemsContainer.innerHTML += itemHTML;
}

if(localStorage.length == 0){
    let con = 0;
    window.localStorage.setItem("productosLimpieza", JSON.stringify(productosLimpieza));
    window.addEventListener("load",function() {
        productos = JSON.parse(localStorage.getItem("productosLimpieza"));
        productos.forEach(element => {
            con = con +1;
            addItem(element, con);
        });
    });
}

if(localStorage.length > 0){
    let con = 0;
    window.addEventListener("load",function() {
        productos = JSON.parse(localStorage.getItem("productosLimpieza"));
        productos.forEach(element => {
            con = con +1;
            addItem(element, con);
        });
    });
}

function press(id_input, operacion){
    let numero=$("#"+id_input).val();
    if(operacion>0 ){    
    numero++;
      }
    else if(numero>=0){
        numero>0 && numero --;  
      }
      else{
        numero--; 
    }
    $("#"+id_input).val(numero);
}
  
function mostrar(){
    swal("Procesando VengaPago", "Procesando VengaPago", "succes"); 
}

