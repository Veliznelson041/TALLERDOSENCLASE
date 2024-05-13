

window.addEventListener("load", function(){


console.log("aplicacion andando");

const idtxtpreciovehiculo = document.querySelector("#idtxtpreciovehiculo");

const idtxtvalorentrega = document.querySelector("#idtxtvalorentrega");

const idbtnfinanciar = document.querySelector("#idbtnfinanciar");

const idresultado = document.querySelector("#idresultado");

const idcuotas = document.querySelector("#idcuotas");



console.log(idtxtpreciovehiculo, idtxtvalorentrega, idbtnfinanciar);

idbtnfinanciar.addEventListener("click",()=>
    {
        console.log("me estan haciendo click");
        
        let preciovehiculo = Number(idtxtpreciovehiculo.value);

        let valorentrega = Number(idtxtvalorentrega.value);

        console.log(preciovehiculo, valorentrega);

        if(valorentrega < preciovehiculo)
        {
            let diferencia = preciovehiculo-valorentrega;

            let financiacion = diferencia + (diferencia*285)/100;

            let valorcuota = financiacion/6;
            valorcuota.toFixed();

            console.log("Valor de la cuota: ", valorcuota.toFixed());

            console.log("Diferencia: " , diferencia);

            console.log("Financiacion: " , financiacion);

            
            

        }
        else
        {
            alert("El valor de la entrega es mayor o igual al precio del vehiculo")
        }


    })


    idbtncuotas.addEventListener("click",()=>
    {
        console.log("me estan haciendo click");
        
        let preciovehiculo = Number(idtxtpreciovehiculo.value);

        let valorentrega = Number(idtxtvalorentrega.value);

        console.log(preciovehiculo, valorentrega);

        if(valorentrega < preciovehiculo)
        {
            let diferencia = preciovehiculo-valorentrega;

            let financiacion = diferencia + (diferencia*285)/100;

            let valorcuota = financiacion/6;
            valorcuota.toFixed();

            console.log("Valor de la cuota: ", valorcuota.toFixed());

            console.log("Diferencia: " , diferencia);

            console.log("Financiacion: " , financiacion);

            
            

        }
        else
        {
            alert("El valor de la entrega es mayor o igual al precio del vehiculo")
        }


    })

})