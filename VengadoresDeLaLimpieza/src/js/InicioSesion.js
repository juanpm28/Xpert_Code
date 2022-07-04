let Correoinicio=document.getElementById("Emailinicio");
let Contrasenajsinicio=document.getElementById("Contrasenainicio");

function validarCorreoinicio ()
{
    if(/^[a-zA-ZñÑ_0-9._%+-]+@(?:[a-zA-ZÑñ_0-9.-]+\.)[a-zA-Z]{2,6}/.test(Correoinicio.value))
    {
        return true;
    }
    if(!isNaN(Correoinicio[0]))
    {
        return false;
    }
    else return false;
}

function validarContrasenajsinicio ()
{
    if(/^(?=.*[A-ZÑ])(?=.*[a-zñ])(?=.*[0-9])[a-zA-ZÑñ0-9\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?]{8,16}/.test(Contrasenajsinicio.value))
    {
        return true;
    }
    else return false;
}

let inicio=document.getElementById("entrar");
inicio.addEventListener("click", (event)=>
{
    event.preventDefault();

    if((!validarCorreoinicio())||(!validarContrasenajsinicio()))
    {
        let listainicio="";

        if(!validarCorreoinicio())
        {
            Correoinicio.style.border="red thin solid"
            listainicio+="<li>Se debe escribir un Correo válido</li>"
        }else{Correoinicio.style.border="";}

        if(!validarContrasenajsinicio())
        {
            Contrasenajsinicio.style.border="red thin solid"
            listainicio+="<li>Se debe escribir una contraseña lleva al menos una letra mayúscula, una minúscula y un número</li>"
        }else{Contrasenajsinicio.style.border="";}

        document.getElementById("alertValidTextinicio").innerHTML=`
        Los campos deben ser llenados correctamente. <ul>${listainicio}</ul>`;
        
        document.getElementById("alertValidacioninicio").style.display="block";

        setTimeout(function()
        {
            document.getElementById("alertValidacioninicio").style.display="none";
        }, 5000);

        return false;
    }

    document.getElementById("alertValidacioninicio").style.display="none";

    localStorage.getItem("elementosTabla")
    let iniciouser = JSON.parse(localStorage.getItem("elementosTabla"));

    const result = iniciouser.filter(elementosTabla => elementosTabla.Correo == Correoinicio.value && 
        elementosTabla.Contraseña == Contrasenajsinicio.value);
 
    console.log(iniciouser);
    if (result[0]) {
      Swal.fire({
        icon: 'success',
        title: '¡INICIO DE SESIÓN EXITOSO!',
        showConfirmButton: false,
        timer: 2000
      })
      window.location='../index.html';     
        return;
      } else if (!result[0]) {
        Swal.fire({
          icon: 'error',
          title: 'Los datos no coinciden',
          text: 'Intenta de nuevo',
        });
        return;
      }

Correoinicio.value="";
Contrasenajsinicio.value="";

Correoinicio.style.border="";
Contrasenajsinicio.style.border="";

}
); 

Correoinicio.addEventListener("blur", (event)=>{
event.target.value=event.target.value.trim();
});

Contrasenajsinicio.addEventListener("blur", (event)=>{
    event.target.value=event.target.value.trim();
    });
