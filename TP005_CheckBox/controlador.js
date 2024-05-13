
function calcularcostofinal(capital, pagaenvio, pagaIVA)
{

    let costoenvio = 0;
    let costoIVA = 0;

    if(isNaN(capital))
    {
        alert("El parametro capital debe ser un numero");
        return 0;
    }

    if(typeof(pagaenvio)!== Boolean)
    {
        alert("este parametro pagaenvio debe ser booleano");
        return 0;
    }

    if(typeof(pagaIVA)!== Boolean)
    {
        alert("el aprametro pagaIVA tiene que ser booleano");
        return 0;
    }

    if(pagaenvio)
    {
        costoenvio = capital *10/100;
    }
    if(pagaIVA)
    {
        costoIVA = capital *21/100;
    }
    return (capital + costoenvio + costoIVA);


}





window.onload = function()
{
    let idtxtvalordeclarado = document.getElementById("idtxtvalordeclarado");

    let idcheckpagoenvio = document.getElementById("idcheckpagaenvio");

    let idcheckpagaIVA = document.getElementById("idcheckpagaIVA");

    let btncalcularcostofinal = document.getElementById("btncalcularcostofinal");

    console.log(idtxtvalordeclarado, idcheckpagoenvio, idcheckpagaIVA);

    btncalcularcostofinal.onclick = function()
    {

        let valordeclarado = Number(idtxtvalordeclarado.value);

        console.log(valordeclarado);

        let R = calcularcostofinal(valordeclarado, idcheckpagoenvio.checked, idcheckpagaIVA.checked)

        alert(R);

    }

}