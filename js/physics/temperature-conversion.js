var fahreinheitElement = document.getElementById("fahrenheit");
var celsiusElement = document.getElementById("celsius");


function fromFahrenheitToOther(f){
    f = parseFloat(f);
    celsiusElement.value = (f-32)/1.8;
}

function fromCelsiusToOthers(c){
    c = parseFloat(c);
    fahreinheitElement.value = (c*1.8)+32;
}
