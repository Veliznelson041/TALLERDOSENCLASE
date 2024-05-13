window.onload = function() //El evento se produce una sola vez, cuando la pagnia se carga de forma completa
{

alert("La pagina se cargo correctamente");//alert es un mensajito por pantalla que me permite mostrar un espacio

let txtnum1 = document.getElementById("txtnum1");
let txtnum2 = document.getElementById("txtnum2");
let btnsumar = document.getElementById("btnsumar");

//muestro por consola las variables capturadas en el paso anterior
console.log(txtnum1);

console.log(txtnum2);

console.log(btnsumar);

//al boton sumar, en su evento click
btnsumar.onclick = function()
{
    alert("me estan haciendo click");

    let n1 = txtnum1.value;
    let n2 = txtnum1.value;

    let resultado = n1 + n2;


    console.log(n1)
    console.log(n2)

    console.log(resultado)

}



}