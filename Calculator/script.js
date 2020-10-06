var result = document.getElementById("result");
var temp1=0;
var temp2=0;
var rezultat=0;
var znakoperacije=0;
var znakjepritisnut=false;

function enterValue(broj) {
    if(znakjepritisnut==true)
    {
        result.innerHTML=broj;
        znakjepritisnut=false;
    }
    else
    {
    if(result.innerHTML==0)
    {
        result.innerHTML = broj;

    }
    else{
        result.innerHTML += broj;
    }
    }
    
}
function operacija(znak)
{
    temp1=parseFloat(result.innerHTML);
    switch(znak)
    {
        case 1:
        znakoperacije=1;
        break;
        case 2:
        znakoperacije=2;
        break;
        case 3:
        znakoperacije=3;
        break;
        case 4:
        znakoperacije=4;
        break;
        
    }
    znakjepritisnut=true;
}
function jednako()
{
    switch(znakoperacije)
    {
        case 1:
        
        result.innerHTML=temp1+parseFloat(result.innerHTML);
        
        break;
        case 2:

        result.innerHTML=temp1-parseFloat(result.innerHTML);

        break;
        case 3:
        result.innerHTML=temp1*parseFloat(result.innerHTML);
        break;
        case 4:
        result.innerHTML=temp1/parseFloat(result.innerHTML);
        break;
    }
}
function brisanje()
{
    result.innerHTML="0";
}




