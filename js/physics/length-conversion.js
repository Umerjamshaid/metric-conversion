var meter_element = document.getElementById("meter");
var km_element = document.getElementById("kilometer");
var milimeter_element = document.getElementById("milimeter");
var mile_element = document.getElementById("miles");
var yard_element = document.getElementById("yard");
var foot_element = document.getElementById("foot");
var inch_element = document.getElementById("inch");
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


function fromMeterToOther(meter){
    meter = parseFloat(meter);
    if(is_valid(meter_element,meter)){
    km_element.value = meter*0.001;
    milimeter_element.value = meter*1000;
    mile_element.value = meter*0.0006213689;
    yard_element.value = meter*1.0936132983;
    foot_element.value  = meter*3.280839895
    inch_element.value = meter*39.37007874;
    }
}

function fromKilometerToOthers(km){
        km = parseFloat(km);
        if(is_valid(km_element,km)){
        meter_element.value = km*1000;
        milimeter_element.value = km*1000000;
        mile_element.value = km*0.6213688756;
        yard_element.value = km*1093.6132983;
        foot_element.value = km*3280.839895;
        inch_element.value = km*39370.07874;
}
}
function fromMilimeterToOther(mm){
    mm = parseFloat(mm);
    if(is_valid(milimeter_element,mm)){
    meter_element.value = mm*0.001;
    km_element.value = mm*0.000001;
    mile_element.value = mm*6.213688756E-7;
    yard_element.value = mm*0.0010936133;
    foot_element.value = mm*0.0032808399;
    inch_element.value = mm*0.0393700787
}
}
function fromMilesToOthers(mile){
    mile = parseFloat(mile);
    if(is_valid(mile_element,mile)){
    meter_element.value = mile*1609.35;
    km_element.value = mile *1.60935;
    milimeter_element.value = mile*1609350;
    yard_element.value = mile*1760.0065617;
    foot_element.value = mile*5280.019685;
    inch_element.value = mile*63360.23622;
}
}
function fromYardToOthers(yard){
    yard = parseFloat(yard);
    if(is_valid(yard_element,yard)){
    meter_element.value = yard*0.9144;
    km_element.value = yard * 0.0009144;
    milimeter_element.value = yard*914.4;
    mile_element.value = yard* 0.0005681797;
    foot_element.value = yard*3;
    inch_element.value = yard*36;
}
}
function fromFootToOthers(foot){
    foot = parseFloat(foot);
    if(is_valid(foot_element,foot)){
    meter_element.value = foot* 0.3048;
    km_element.value = foot * 0.0003048;
    milimeter_element.value = foot*304.8 ;
    mile_element.value = foot*0.0001893932 ;
    yard_element.value = foot *0.3333333333 ;
    inch_element.value = foot*12;
}
}
function fromInchToOthers(inch){
    inch = parseFloat(inch);
    if(is_valid(inch_element,inch)){
    meter_element.value = inch*0.0254 ;
    km_element.value = inch * 0.0000254;
    milimeter_element.value = inch* 25.4;
    mile_element.value = inch* 0.0000157828;
    yard_element.value = inch * 0.0277777778;
    foot_element.value = inch* 0.0833333333;
}
}