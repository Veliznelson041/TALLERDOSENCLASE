window.onload=function()
{

    console.log("running");
    
    const button1 = document.querySelector("#button1");

    document.addEventListener("click",(e)=>
    {
        console.log("--------------------");
        console.log("etiqueta " + e.target);
        console.log("nombre etiqueta " + e.target.tagName);
        console.log("tipo " + e.target.type);
        console.log("id " + e.target.id);
        console.log("textContent " + e.target.textContent); 
        console.log("value " + e.target.value);
 
    })


    button1.addEventListener("click",(e)=>
    {

        console.log("me estan haciendo click en el botton");
        alert("soy el boton 1");
        e.stopPropagation();


    })



}