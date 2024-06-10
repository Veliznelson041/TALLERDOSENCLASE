window.onload=function()
{
    console.log("JS andandooo")

    const idtxtdatosingresados = document.querySelector("#idtxtdatosingresados");
    
    idtxtdatosingresados.addEventListener("focus",(e)=>
    {

        console.log("focus - recibimos el foco => " + e.target.value);


    })


    idtxtdatosingresados.addEventListener("input",(e)=>
    {
        console.log("input - cambia de valor el input => ",e.target.value);

    })

    idtxtdatosingresados.addEventListener("keydown",(e)=>
    {
        console.log("keydown - apenas presiona la tecla y todavia no la suelta => ",e.key);
    })

    idtxtdatosingresados.addEventListener("keyup",(e)=>
    {
        console.log("keyup - cuando presiona una tecla y suelta => ",e.key);
    })

    idtxtdatosingresados.addEventListener("change",(e)=>
    {
        console.log("change - cambiamos valor y perdemos foco =>",e.target.value);
    })

    idtxtdatosingresados.addEventListener("blur",(e)=>
    {
        console.log("blur - perdemos el foco (haya o no modificado algo) => ",e.target.value);
    })

    idtxtdatosingresados.addEventListener("paste",(e)=>
    {
        console.log("paste - pegamos texto => ",e.target.value);
    })

    idtxtdatosingresados.addEventListener("copy",(e)=>
    {
        console.log("copy - copiamos algo => ",e.target.value);
    })

    idtxtdatosingresados.addEventListener("cut",(e)=>
    {
        console.log("cut - cortamos algo => ",e.target.value);
    })

    

}