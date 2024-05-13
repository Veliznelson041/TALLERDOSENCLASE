
///Forma1 Clasica

function cuadrado(numero)
{
    return(numero * numero);
}

//forma3 clasica dentro de una variable

let funcionenvariable = function()
{
    console.log("soy un procedimiento medio raro porque estoy dentro de una variable y soy anonima")
}

//forma4 clasica dentro de una constante

const funcionennunacontaste = function()
{
    console.log("soy una funcion medio rara dentro de una constante");
}

//forma5 arrow function

const cuadrado2 = (numero)=>
{
    return (numero*numero);
}

const cubo =(numero)=>
{
    return(numero*numero*numero);
}

//una arrow function que ercibe un solo parametron no nesecita los parenctesis () para enmarcar los parametros y no necesita las {} para
const cubo2 = numero => numero * numero *numero;


window.onload = function()
{

    //vamos a yomar control de los elemntos del documento wuery selecrtir
    const idbtnprobar = document.querySelector("#idbtnprobar");

    console.log(idbtnprobar);

    //forma 2 clasica y anonima
    idBtnProbar.onclick = function()
    {

    }

    idBtnProbar.addEventListener("click",function()
    {
        console.log("esto se tiene que disparar cuando hace click");
    })



    idBtnProbar.addEventListener("click",function(){

        console.log("me estan haciendo click y estoy ejecutando una función anonima")

        let Resultado = Cuadrado(10);
        console.log(Resultado);

        FuncionEnVAriable(); /* invocando */

        FuncionEnUnaConstante(); /* esto esta dentro de una constante */

        let Resultado2 = Cuadrado2(5);
        console.log(Resultado2);

    })

    console.log("this application is running!!!");

    

}