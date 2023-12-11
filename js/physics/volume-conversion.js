var ounces_element = document.getElementById("ounces");
var milliliters_element = document.getElementById("milliliters");
var gallons_element = document.getElementById("gallons");
var liters_element = document.getElementById("liters");
var cubic_feet_element = document.getElementById("cubic feet");
var cubic_yardselement = document.getElementById("cubic yards");
var cubic_meters_element = document.getElementById("cubic meters");

function is_valid(element,value){
    if(value < 0){
        alert("Cannot accept negative numbers!");
        element.value = "";
        return false;

    }
    else{
        return true;
    }
}

function fromouncesToOther(num){
    num = parseFloat(num);
    if(is_valid(ounces_element,num)){
    milliliters_element.value = num * 29.574;
    gallons_element.value = num / 128;
    liters_element.value = num / 33.814;
    cubic_feet_element.value = num / 957.5;
    cubic_yardselement.value = num / 25850;
    cubic_meters_element.value = num / 33810;
    }
}
function fromlitersToOthers(num){
    num = parseFloat(num);
    if(is_valid(liters_element,num)){
    milliliters_element.value = num * 1000;
    gallons_element.value = num / 3.785;
    cubic_feet_element.value = num / 28.317;
    cubic_yardselement.value = num / 764.6;
    cubic_meters_element.value = num / 1000;
    ounces_element.value = num * 33.81;
    }
}

function fromgallontoothers(num){
    num = parseFloat(num);
    if(is_valid(gallons_element,num)){
        cubic_meters_element.value = num * 264.2;
        liters_element.value =  num / 3.785;
        cubic_feet_element.value = num / 7.481;
        cubic_yardselement.value = num / 202;
        milliliters_element.value = num * 3785;
        ounces_element.value = num * 128;
}
}
function frommillilitersToOthers(num){
    num = parseFloat(num);
    if(is_valid(milliliters_element,num)){
    gallons_element.value = num / 3785;
    liters_element.value =  num / 1000;
    cubic_feet_element.value = num / 28320;
    cubic_yardselement.value = num / 764600;
    cubic_meters_element.value = num / 1000000;
    ounces_element.value = num / 29.57;
}
}
function fromcubicfeetToOthers(num){
    num = parseFloat(num);
    if(is_valid(cubic_feet_element,num)){
    gallons_element.value = num * 7.481;
    liters_element.value =  num * 28.32;
    cubic_yardselement.value = num / 27;
    cubic_meters_element.value = num / 35.31;
    milliliters_element.value = num * 28320;
    ounces_element.value = num * 957.5;
}
}
function fromcubicyardsToOthers(num){
    num = parseFloat(num);
    if(is_valid(cubic_yardselement,num)){
        gallons_element.value = num * 202;
        liters_element.value =  num * 764.6;
        cubic_feet_element.value = num * 27;
        cubic_meters_element.value = num / 1.308;
        milliliters_element.value = num * 764600;
        ounces_element.value = num * 25850;
}
}
function fromcubicmetersToOthers(num){
    num = parseFloat(num);
    if(is_valid(cubic_meters_element,num)){
        gallons_element.value = num * 264.2;
        liters_element.value =  num * 1000;
        cubic_feet_element.value = num * 35.31;
        cubic_yardselement.value = num * 1.308;
        milliliters_element.value = num * 1000000;
        ounces_element.value = num * 33810;
}
}
