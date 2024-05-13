
function determinargenero(isMan, isWoman, isUndefined)
{

    if(typeof(isMan)!== Boolean)
    {
        alert(`is man no es booleano`);
        return 0;
    }    

    if(typeof(isWoman)!==Boolean)
    {
        alert(`is woman no es booleano`);
        return 0;
    }

    if(typeof(isUndefined) !== Boolean)
    {
        alert(`is undefined no es booleano`);
        return 0;
    }

    if(isMan)
    {
        return 1;
    }

    else
    {
        if(isWoman)
        {
            return 2;
        }
        else
        {
            if(isUndefined)
            {
                return 3;
                
            }
            else
            {
                alert(`seleccione que opcion es valida`);
            }
        }
    }



}




function clickbotongenero()
{

    console.log(`this event click is ok !!!`);

    let Resultado = determinargenero(iddradMujer.checked, iddradVaron.checked, iddradnodefinido.checked);

    alert(Resultado);

}



window.onload = function()
{
    

    console.log(`this application is running!!!`);

    let iddradVaron = document.getElementById(`iddradVaron`);

    let iddradMujer = document.getElementById(`iddradMujer`);

    let iddradnodefinido = document.getElementById(`iddradnodefinido`);

    let btndeterminarnumero = document.getElementById(`btndeterminarnumero`);

    console.log(iddradMujer, iddradVaron, iddradnodefinido, btndeterminarnumero);

    btndeterminarnumero.onclick = clickbotongenero;

}