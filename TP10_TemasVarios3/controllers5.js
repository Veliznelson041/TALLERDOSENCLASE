

window.addEventListener("load", ()=>
    {
        console.log("la aplicacion esta andando");

        const btnGenerar100 = document.querySelector("#btnGenerar100");
        const idDivBotones = document.querySelector("#idDivBotones");
        const btnAsignarEventos = document.querySelector("#btnAsignarEventos");

        console.log(btnGenerar100);
        console.log(idDivBotones);
        

        btnGenerar100.addEventListener("click",()=>
            {
                console.log("aqui tengo que generar 100 botones dinamicos");

                let botonesDinamicos = "";

                for(let i=0; i<100; i++)
                    {
                        botonesDinamicos = botonesDinamicos + `<br><input type="button"value="boton Dinamico${i}"/>`;
                    }

                console.log(botonesDinamicos);

                idDivBotones.innerHTML=botonesDinamicos;

            })

        btnAsignarEventos.addEventListener("click",()=>
            {
                VectordeBotones.forEach((elemento, indice)=>
                    {
                        console.log(elemento);

                        elemento.addEventListener("click",()=>
                            {
                                console.log(`soy el boton dinamico ${indice}`);
                                alert(`soy el boton dinamico ${indice}`);
                            })

                    })

                console.clear();
                console.log("aqui deberia recorrer y asignarle comportamiento");

                let VectordeBotones = document.querySelectorAll("input");

                //console.log(VectordeBotones);

                console.log(VectordeBotones, indice=>
                    {
                        console.log(elemento);

                        elemento.addEventListener("click",()=>
                            {
                                console.log(`soy el boton dinamico ${indice}`);
                                alert(`soy el boton dinamico`);
                            })

                    })


            })

        btncreardos.addEventListener("click",()=>
            {
                console.log("por aqui deberia crear botones de otra forma");

                for(let i=0; i<10;i++)
                    {
                        let botondinamico = document.createElement("input");

                        botondinamico.type="button";
                        botondinamico.value=`Soy dinamico ${i}`;

                        console.log(botondinamico);

                        botondinamico.addEventListener("click",()=>
                            {
                                alert(`Soy dinamico ${i}`);      
                            })

                            idDivBotones.appendChild(botonesDinamicos);
                    }

                
                
            })







    })