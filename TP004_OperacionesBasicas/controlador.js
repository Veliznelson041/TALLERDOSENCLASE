
window.onload = function()
{

    console.log("Esta funcionando");

    let txtNumero1 = document.getElementById("txtNumero1");

    let txtNumero2 = document.getElementById("txtNumero2");

    let idButtonSuma = document.getElementById("idButtonSuma");

    let idButtonDividir = document.getElementById("idButtonDividir");



    let idh3Resultado = document.getElementById("idh3Resultado");

    let idlabelResultado = document.getElementById("idlabelResultado");

    let iddivResultado = document.getElementById("iddivRsultado");




    console.log(txtNumero1);
    console.log(txtNumero2);
    console.log(idButtonSuma);

    idButtonSuma.onclick = function()
    {
        let Num1 = Number(txtNumero1.value);
        let Num2 = Number(txtNumero2.value);

        let Resultado = Num1 + Num2; 

        idh3Resultado.textContent = `El resultado de la SUMA ES:= ${Resultado}`;

        idlabelResultado.textContent = "El resultado de la suma es:= " + Resultado;

        iddivResultado.innerHTML = `<h1>El Resultado es ${Resultado} <h1>` 

        
        let VariosH3 = "";
        for(let i = 0; 1<= 100; i++)
        {
            VariosH3 = VariosH3 +`<h1> soy una etiqueta ${i} html dinamica <h1>`
        }

        iddivResultado.innerHTML = ``

        
        
        
        
        
        console.log(Resultado);



    }



    idButtonDividir.onclick = function()
    {
        let Num1 = Number(txtNumero1.value);
        let Num2 = Number(txtNumero2.value);
        let Resultado = 0;

        if(Num2 !== 0)
        {
            let Resultado = Num1 / Num2; 

        }
        else
        {
            alert("No puedo dividir por cero");
        }

        idh3Resultado.textContent = `El resultado de la division es: ${Resultado.toFixed(2)}`;        

    }





    /*
    idButtonResta

    idButtonDividir
    */
}