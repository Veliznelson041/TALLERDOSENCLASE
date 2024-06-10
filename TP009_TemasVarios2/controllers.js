window.addEventListener("click",()=>
{

    const idbtnAceptar = document.querySelector("#idbtnAceptar");

    console.log("andando");

    console.log(idbtnAceptar);

    idbtnAceptar.addEventListener("click",(e)=>
    {
        console.log("antes que la pagina se retire, regresa al servidor");
        e.preventDefault(); ///Prevenir evento por defecto.

    })


})
