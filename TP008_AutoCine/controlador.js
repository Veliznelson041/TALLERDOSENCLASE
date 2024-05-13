
const devolvercostoentradas = (numeroentradas)=>
    {
        if(numeroentradas > 4)
            {
                if(numeroentradas === 5)
                    {
                        return(8000 + 1000);
                    }
                    else
                    {
                        if(numeroentradas === 6)
                            {
                                return(8000 + 2000);
                            }
                    }
            }
            else
            {
                return numeroentradas * 2000;
            }
    }

const DevolverCostoComida = (p1,p2)=>
    {
        return(p1*p2);
    }

const DevolverTotalConDescuento = (importeTotal, AplicaDescuento)=>
    {
        if(AplicaDescuento)
            {
                return (importeTotal - (importeTotal * 10/100));
            }
            else
            {
                return importeTotal;
            }
    }



window.onload = function()
{

    const idselectvehiculo = document.querySelector("#idselectvehiculo");
    const idbuttoncalcular = document.querySelector("#idbuttoncalcular");
    const idlabeltotalpagar = document.querySelector("#idlabeltotalpagar");
    const idinputentradas = document.querySelector("#idinputentradas");
    const idselectcomidas = document.querySelector("#idselectcomidas");
    const idinputcantidadalimentos = document.querySelector("#idinputcantidadalimentos");
    const idselectbebidas = document.querySelector("#idselectbebidas");
    const idinputcantidadbebidas = document.querySelector("#idinputcantidadbebidas");
    const idcheckboxpagoconnativa = document.querySelector("#idcheckboxpagoconnativa");

    
    console.log(idselectvehiculo, idbuttoncalcular, idlabeltotalpagar, idselectbebidas);

    idbuttoncalcular.addEventListener("click", ()=>
    {

        let costovehiculo = Number(idselectvehiculo.value);

        let Entradas = Number(idinputentradas.value) * 2000;
        Entradas = devolvercostoentradas(Number(idinputentradas.value));

        let Comidas = Number(idselectcomidas.value);
        let CantidadComidas = Number(idinputcantidadalimentos.value);
        let costoComida = DevolverCostoComida(Comidas, CantidadComidas);

        let CostoBebidas = Number(idselectbebidas.value);
        let cantidadBebidas = Number(idinputcantidadbebidas.value);
        let CostoBebidasTotal = CostoBebidas * cantidadBebidas; 


        console.log("Costo Vehiculo",costovehiculo);
        console.log("Entradas",Entradas);
        console.log("Cantidad de comidas",CantidadComidas);
        console.log("Costo comida",costoComida);
        console.log("Costo Bebida",CostoBebidas);




        let TOTAL = costovehiculo + Entradas + costoComida + CostoBebidasTotal;

        let TOTALFINAL = DevolverTotalConDescuento(TOTAL, idcheckboxpagoconnativa.checked);

    

        idlabeltotalpagar.textContent = `El total a pagar ${TOTALFINAL}`;

        console.log(idselectvehiculo.value);



    })

}