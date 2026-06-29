function convertTemperature(){

let temp=document.getElementById("temperature").value;

let unit=document.getElementById("unit").value;

let result=document.getElementById("result");

if(temp===""){

result.innerHTML="Please enter a temperature.";

return;

}

temp=parseFloat(temp);

let c,f,k;

if(unit==="celsius"){

if(temp<-273.15){

result.innerHTML="Temperature below absolute zero!";

return;

}

c=temp;

f=(temp*9/5)+32;

k=temp+273.15;

}

else if(unit==="fahrenheit"){

if(temp<-459.67){

result.innerHTML="Temperature below absolute zero!";

return;

}

c=(temp-32)*5/9;

f=temp;

k=c+273.15;

}

else{

if(temp<0){

result.innerHTML="Temperature below absolute zero!";

return;

}

c=temp-273.15;

f=(c*9/5)+32;

k=temp;

}

result.innerHTML=`

Celsius : ${c.toFixed(2)} °C <br><br>

Fahrenheit : ${f.toFixed(2)} °F <br><br>

Kelvin : ${k.toFixed(2)} K

`;

}