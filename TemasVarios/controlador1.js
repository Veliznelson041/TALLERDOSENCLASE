/* window.onload = function() //El evento se produce una sola vez, cuando la pagnia se carga de forma completa
{

alert("La pagina se cargo correctamente");//alert es un mensajito por pantalla que me permite mostrar un espacio

let idNumero1 = document.getElementById("#idNumero1");
let idNumero2 = document.getElementById("#idNumero2");
let btnCalcular = document.getElementById("#btnCalcular");

//muestro por consola las variables capturadas en el paso anterior
console.log(idNumero1);

console.log(idNumero2);

console.log(btnCalcular);

//al boton sumar, en su evento click
btnsumar.onclick = function()
{
    alert("me estan haciendo click");

    let n1 = idNumero1.value;
    let n2 = idNumero2.value;

    let resultado = n1 + n2;


    console.log(n1)
    console.log(n2)

    console.log(resultado)

}



} */

class Suma
{

    Numero1=0;
    Numero2=0;

    #ResultadoSuma=0;

    constructor(p1,p2)
    {
        this.Numero1=p1;
        this.Numero2=p2;
    }

    getNumero1()
    {
        return(this.Numero1);
    }

    getNumero2()
    {
        return(this.Numero2)
    }

    setnumero1(p)
    {
        this.Numero1=(p);
        this.Sumar();
    }

    setnumero2(p)
    {
        this.Numero2=(p);
        this.Sumar();
    }

    AccionSumar()
    {
        this.#ResultadoSuma = this.Numero1 + this.Numero2;
        return this.#ResultadoSuma;
    }

    dibujarCalculadora()
    {
        let fragmento = document.createElementFragment();

        let tituloH2 = document.createElement("h2");
        tituloH2.textContent=tituloVista;

        let label1 = document.createElement("label");
        label1.textContent="Ingrese Numero1";

        let input1 = document.createElement("h2");
        input1.ariaPlaceholder=tituloVista;

    }

}





window.addEventListener("load",()=>
    {
        const Ejemplo1_Num1 = document.querySelector("#Ejemplo1_Num1");
        const Ejemplo1_Num2 = document.querySelector("#Ejemplo1_Num2");
        const Ejemplo1_BtnSumar = document.querySelector("#Ejemplo1_BtnSumar");
        const Ejemplo1_IdResultado = document.querySelector("#Ejemplo1_IdResultado");


        const Ejemplo2_Num1 = document.querySelector("#Ejemplo2_Num1");
        const Ejemplo2_Num2 = document.querySelector("#Ejemplo2_Num2");
        const Ejemplo2_BtnSumar = document.querySelector("#Ejemplo2_BtnSumar");
        const Ejemplo2_IdResultado = document.querySelector("#Ejemplo2_IdResultado");


        const idcontenedor1 = document.querySelector("#idcontenedor1");
        const idcontenedor2 = document.querySelector("#idcontenedor2");
        const idcontenedor3 = document.querySelector("#idcontenedor3");


        console.log(Ejemplo1_Num1, Ejemplo1_Num2, Ejemplo1_BtnSumar, Ejemplo1_IdResultado);
        console.log(Ejemplo2_Num1, Ejemplo2_Num2, Ejemplo2_BtnSumar, Ejemplo2_IdResultado);

        console.log(idcontenedor1);
        console.log(idcontenedor1);


        Ejemplo1_BtnSumar.addEventListener("click",()=>
        {
            let Numero1 = Number(Ejemplo1_Num1.value);
            let Numero2 = Number(Ejemplo1_Num2.value);
            let instanciaSuma = new Suma(Numero1, Numero2);

            Ejemplo1_idResultado.textContent = `Suma: ${instanciaSuma.DevolverSuma()}`;
        })    

        Ejemplo1_Num1.addEventListener("input",()=>
        {
            let Numero1 = Number(Ejemplo1_Num1.value);
            let Numero2 = Number(Ejemplo1_Num2.value);
            
            let instanciaSuma = new Suma(Numero1, Numero2);
            Ejemplo1_IdResultado.textContent = `Suma: ${instanciaSuma.DevolverSuma()}`; 
        })

        Ejemplo2_Num2.addEventListener("input", ()=>
        {
            let Numero1 = Number(Ejemplo2_Num1.value);
            let Numero2 = Number(Ejemplo2_Num2.value);

            let instanciaSuma = new Suma(Numero1, Numero2);
            Ejemplo2_IdResultado.textContent = `Suma: ${instanciaSuma.DevolverSuma()}`;
        })




        Ejemplo2_BtnSumar.addEventListener("click",()=>
        {
            let Numero1 = Number(Ejemplo2_Num1.value);
            let Numero2 = Number(Ejemplo2_Num2.value);

            let instanciaSuma = new Suma(Numero1, Numero2);
            Ejemplo2_IdResultado.textContent = `Suma: ${instanciaSuma.DevolverSuma()}`;
        })
    

        Ejemplo2_Num1.addEventListener("input",()=>
        {
            let Numero1 = Number(Ejemplo2_Num1.value);
            let Numero2 = Number(Ejemplo2_Num2.value);
            
            let instanciaSuma = new Suma(Numero1, Numero2);
            Ejemplo2_IdResultado.textContent = `Suma: ${instanciaSuma.DevolverSuma()}`; 
        })

        Ejemplo2_Num2.addEventListener("input", ()=>
        {
            let Numero1 = Number(Ejemplo2_Num1.value);
            let Numero2 = Number(Ejemplo2_Num2.value);

            let instanciaSuma = new Suma(Numero1, Numero2);
            Ejemplo2_IdResultado.textContent = `Suma: ${instanciaSuma.DevolverSuma()}`;
        })

        console.log("Sitio Funcionando");

        let Objeto1 = new Suma(40,50);
        console.log(Objeto1.DevolverSuma());

        let Objeto2 = new Suma();
        console.log(Objeto2.DevolverSuma());

        Objeto2.setnumero1(25);
        Objeto2.setnumero2(40);
        console.log(Objeto2.DevolverSuma());

    })


