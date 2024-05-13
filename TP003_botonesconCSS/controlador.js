
window.onload = function() /*esto se produce al finalizar el renderizado*/ 
{
    /*todo esto se produce una sola vez*/
    console.log("La pagina esta cargada y lista para que el usuario trabaje")

    let txtButton1 = document.getElementById("txtButton1");
    let txtButton2 = document.getElementById("txtButton2");
    let txtButton3 = document.getElementById("txtButton3");
    let txtValorIngresado = document.getElementById("txtValorIngresado");

    console.log(txtButton1);
    console.log(txtButton2);
    console.log(txtButton3);
    console.log(txtValorIngresado);
    

    txtButton1.onclick = function()
    {
        let NumeroIngresado = txtValorIngresado.value;
        let NumeroPOSTA = 0;

        if(isNaN(NumeroIngresado))/*Si no es un número*/
        {
            console.log("Che, el calor no es un número")
        }
        else
        {
            NumeroPOSTA = Number(NumeroIngresado);
            let Resultado = NumeroPOSTA + 10;
            console.log(Resultado);
        }

        NumeroPOSTA = Number(NumeroIngresado);
        let Resultado = NumeroPOSTA + 10;
        console.log(Resultado);

    }   



    txtButton2.onclick = function()
    {
        let NumeroIngresado = txtValorIngresado.value;
        let NumeroPOSTA = 0;

        if(isNaN(NumeroIngresado))/*Si no es un número*/
        {
            console.log("Che, el calor no es un número")
        }
        else
        {
            NumeroPOSTA = Number(NumeroIngresado);
            let Resultado = NumeroPOSTA + 20;
            console.log(Resultado);
        }

        NumeroPOSTA = Number(NumeroIngresado);
        let Resultado = NumeroPOSTA + 20;
        console.log(Resultado);
    }



    txtButton3.onclick = function()
    {
        let NumeroIngresado = txtValorIngresado.value;
        let NumeroPOSTA = 0;

        if(isNaN(NumeroIngresado))/*Si no es un número*/
        {
            console.log("Che, el calor no es un número")
        }
        else
        {
            NumeroPOSTA = Number(NumeroIngresado);
            let Resultado = NumeroPOSTA + 30;
            console.log(Resultado);
        }

        NumeroPOSTA = Number(NumeroIngresado);
        let Resultado = NumeroPOSTA + 30;
        console.log(Resultado);
    }




}