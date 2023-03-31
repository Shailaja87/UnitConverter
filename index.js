

let input= document.getElementById('input');
let result=document.getElementById('result');
let inputType=document.getElementById('inputType');
let resultType=document.getElementById('resultType');

let calculate=document.getElementById('Calculate');


let inputTypevalue= inputType.value;
console.log(inputTypevalue);
let resultTypevalue= resultType.value;

console.log(resultTypevalue);
calculate.onclick=function myResult()

{
    let inputTypevalue= inputType.value;
    let resultTypevalue= resultType.value;
    if(inputTypevalue==="Meter"&& resultTypevalue==="kilometer")
    {
        result.value=Number(input.value)*0.001;
    }
    else if(inputTypevalue==="Meter"&& resultTypevalue==="centimeter")
    {
        result.value=Number(input.value)*100;
    }
  
    else if(inputTypevalue==="Meter"&& resultTypevalue==="Mile")
    {
        result.value=Number(input.value)*0.000621;
    }
    else if(inputTypevalue==="Meter"&& resultTypevalue==="Yard")
    {
        result.value=Number(input.value)*1.094;
    }
    else if(inputTypevalue==="Meter"&& resultTypevalue==="Foot")
    {
        result.value=Number(input.value)*3.28084;
    }
    else if(inputTypevalue==="Meter"&& resultTypevalue==="Inch")
    {
        result.value=Number(input.value)*39.3701;
    }
    if(inputTypevalue==="kilometer"&& resultTypevalue==="meter")
    {
        result.value=Number(input.value)*1000;
    }
    else if(inputTypevalue==="kilometer"&& resultTypevalue==="centimeter")
    {
        result.value=Number(input.value)*100000;
    }

    else if(inputTypevalue==="kilometer"&& resultTypevalue==="Mile")
    {
        result.value=Number(input.value)*62.1;
    }
    else if(inputTypevalue==="kilometer"&& resultTypevalue==="Yard")
    {
        result.value=Number(input.value)*1094;
    }
    else if(inputTypevalue==="kilometer"&& resultTypevalue==="Foot")
    {
        result.value=Number(input.value)*3280.84;
    }
    else if(inputTypevalue==="kilometer"&& resultTypevalue==="inch")
    {
        result.value=Number(input.value)*39370.1;
    }
    if(inputTypevalue==="centimeter"&& resultTypevalue==="Meter")
    {
        result.value=Number(input.value)*0.01;
    }
    else if(inputTypevalue==="centimeter"&& resultTypevalue==="kilometer")
    {
        result.value=Number(input.value)*0.00001;
    }
    else if(inputTypevalue==="centimeter"&& resultTypevalue==="Mile")
    {
        result.value=Number(input.value)*0.0000062137;
    }
    else if(inputTypevalue==="centimeter"&& resultTypevalue==="Yard")
    {
        result.value=Number(input.value)*0.0109361;
    }
    else if(inputTypevalue==="centimeter"&& resultTypevalue==="Foot")
    {
        result.value=Number(input.value)*0.0328084;
    }
    else if(inputTypevalue==="centimeter"&& resultTypevalue==="inch")
    {
        result.value=Number(input.value)*0.393701;}
    if(inputTypevalue==="Mile"&& resultTypevalue==="Meter")
    {
        result.value=Number(input.value)*1609.34;
    }
    else if(inputTypevalue==="Mile"&& resultTypevalue==="kilometer")
    {
        result.value=Number(input.value)*1.60934;
    }
    else if(inputTypevalue==="Mile"&& resultTypevalue==="centimeter")
    {
        result.value=Number(input.value)*160934.0;
    }
    else if(inputTypevalue==="Mile"&& resultTypevalue==="Yard")
    {
        result.value=Number(input.value)*1760;
    }
    else if(inputTypevalue==="Mile"&& resultTypevalue==="Foot")
    {
        result.value=Number(input.value)*5280;
    }
    else if(inputTypevalue==="Mile"&& resultTypevalue==="inch")
    {
        result.value=Number(input.value)*63360;
    }
    if(inputTypevalue==="Yard"&& resultTypevalue==="Meter")
        {
            result.value=Number(input.value)*0.9144;
        }
        else if(inputTypevalue==="Yard"&& resultTypevalue==="kilometer")
        {
            result.value=Number(input.value)*0.0009144;
        }
        else if(inputTypevalue==="Yard"&& resultTypevalue==="centimeter")
        {
            result.value=Number(input.value)*91.44;
        }
        else if(inputTypevalue==="Yard"&& resultTypevalue==="Mile")
        {
            result.value=Number(input.value)*0.000568182;
        }
        else if(inputTypevalue==="Yard"&& resultTypevalue==="Foot")
        {
            result.value=Number(input.value)*3;
        }
        else if(inputTypevalue==="Yard"&& resultTypevalue==="inch")
        {
            result.value=Number(input.value)*36;}
        if(inputTypevalue==="Foot"&& resultTypevalue==="Meter")
            {
                result.value=Number(input.value)*0.3048;
            }
            else if(inputTypevalue==="Foot"&& resultTypevalue==="kilometer")
            {
                result.value=Number(input.value)*0.0003048;
            }
            else if(inputTypevalue==="Foot"&& resultTypevalue==="Mile")
            {
                result.value=Number(input.value)*0.000189394;
            }
            else if(inputTypevalue==="Foot"&& resultTypevalue==="Yard")
            {
                result.value=Number(input.value)*0.33333;
            }
            else if(inputTypevalue==="Foot"&& resultTypevalue==="centimeter")
            {
                result.value=Number(input.value)*30.48;
            }
            else if(inputTypevalue==="Foot"&& resultTypevalue==="inch")
            {
                result.value=Number(input.value)*12;}
            if(inputTypevalue==="inch"&& resultTypevalue==="Meter")
                {
                    result.value=Number(input.value)*0.0254;
                }
                else if(inputTypevalue==="inch"&& resultTypevalue==="kilometer")
                {
                    result.value=Number(input.value)*0.0000254;
                }
                else if(inputTypevalue==="inch"&& resultTypevalue==="Mile")
                {
                    result.value=Number(input.value)*0.00001578;
                }
                else if(inputTypevalue==="inch"&& resultTypevalue==="Yard")
                {
                    result.value=Number(input.value)*0.0277778;
                }
                else if(inputTypevalue==="inch"&& resultTypevalue==="Foot")
                {
                    result.value=Number(input.value)*0.0833333;
                }
                else if(inputTypevalue==="inch"&& resultTypevalue==="centimeter")
                {
                    result.value=Number(input.value)*2.54;}

}
