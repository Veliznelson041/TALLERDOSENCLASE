window.addEventListener("load",()=>
{

    console.log("Funciona");

    const vectorprovincia=["Catamarca", "La Rioja", "Cordoba", "Tucuman", "Salta", "Santiago del Estero", "Misiones", "Corrientes", "Mendoza", "Formosa", "Neuquen", "San Juan", "PIRQUITAS, Olvidateee",];

    const idprovincia = document.querySelector("#idprovincia");

    const idagregar = document.querySelector("#idagregar");

    const iddomicilio = document.querySelector("#iddomicilio");

    const idapellidoynombre  = document.querySelector("#idapellidoynombre");

    const idcontenedor1 = document.querySelector("#idcontenedor1");

    const idcontenedor2 = document.querySelector("#idcontenedor2");

    const idbody = document.querySelector("#idbody");

    const idmostrar = document.querySelector("#idmostrar");
    
    console.log(1,2,3,4);

    idprovincia.innerHTML="";

    vectorprovincia.forEach((element, indice)=>
    {
        let opcionX = document.createElement("option");

        opcionX.value = element;

        opcionX.textContent = element;

        idprovincia.appendChild(opcionX);
    })

    const EstudiantesResgistrados=[];

    idagregar.addEventListener("click",()=>
    {
        console.log("Click me");

        if(idapellidoynombre.value != "")
            {
                if(iddomicilio.value != "")
                    {

                    }
                    else
                    {
                        alert("no se registro domicilio");
                    }
            }
            else
            {
                alert("no se registro nombre y apellido");
            }


            let AApellidoyNombre = idapellidoynombre.value;
            let ADomicilio = iddomicilio.value;
            let AProvincia = idprovincia.value;

            let Estudiante={Nombre: AApellidoyNombre, Domicilio: ADomicilio, Provincia: AProvincia};

            console.log(Estudiante);

            EstudiantesResgistrados.push(Estudiante);

            console.log(EstudiantesResgistrados);          

            let label = document.createElement("h4");

            label.textContent= `${AApellidoyNombre} - ${AProvincia} - ${ADomicilio}`;

            console.log(label);

            idcontenedor1.appendChild(label);



            
    })

    idmostrar.addEventListener("click", ()=>
    {
        console.log("Haz hecho click en mostrar");

        idbody.innerHTML="";


        EstudiantesResgistrados.forEach((element, indice)=>
        {

            let Fila = document.createElement("tr");

            let Celda1 = document.createElement("td");
            let Celda2 = document.createElement("td");
            let Celda3 = document.createElement("td");

            Celda1.textContent = element.Nombre;
            Celda2.textContent = element.Domicilio;
            Celda3.textContent = element.Provincia;

            Fila.appendChild(Celda1);
            Fila.appendChild(Celda2);
            Fila.appendChild(Celda3);
            
            idbody.appendChild(Fila);
        })
    })

    
})