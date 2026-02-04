type value=number | string;
function formatValue(a:value):void{
    if(typeof a==="string")
    {
        console.log(a.toUpperCase())
    }
    else if(typeof a==="number")
    {
        console.log(Math.round(a))
    }
}
formatValue("hi i am swapna");
formatValue(23.5);