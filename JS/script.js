const myNumber = document.getElementById("myNumber");
const toCelcious = document.getElementById("toCelcious");
const toFahrenheit = document.getElementById("toFahrenheit");
const myResponse = document.getElementById("myResponse");
let temp;


function convert(){

if(toFahrenheit.checked){
temp = Number(myNumber.value);
temp = temp * 9 / 5 +32;
myResponse.textContent = temp.toFixed(1) + "°F";

}
else if(toCelcious.checked){
    temp = Number(myNumber.value);
   temp = (temp-32) * (5/9); 
    myResponse.textContent = temp.toFixed(1) + "°C";
}
else{
myResponse.textContent = "Please Select a unit"
}
}