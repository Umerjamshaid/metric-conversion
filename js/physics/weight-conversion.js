/*Elements*/

var pounds_element = document.getElementById("pounds");
var gram_element = document.getElementById("grams");
var kilogram_element = document.getElementById("kilogram");
var ounce_element = document.getElementById("ounce");
var shortton_element = document.getElementById("short-ton");
var metricTonElement = document.getElementById("metric-ton");
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
/*from pounds to other conversions*/
function fromPoundsToOther(pounds){
  pounds = parseFloat(pounds);
  if(is_valid(pounds_element,pounds)){
  gram_element.value = pounds / 0.0022046;   //pounds to gram
  kilogram_element.value = pounds/2.2046;    //pounds to kilogram
  ounce_element.value = pounds*16;         //to ounces
  shortton_element.value = pounds/2000;
  metricTonElement.value = pounds*0.000453592;
}
}

/*from Grams to other conversions*/
function fromGramToOthers(gram){
  gram = parseFloat(gram);
  if(is_valid(gram_element,gram)){
  pounds_element.value = gram*0.0022046;  //to pounds
  kilogram_element.value = gram/1000;  //to kg
  ounce_element.value = gram*0.035274;     //to ounce
  shortton_element.value = gram/907200;
  metricTonElement.value = gram*0.000001;
  }
}

/*from kg to other conversions*/
function fromKilogramToOther(kg){
  kg = parseFloat(kg);
  if(is_valid(kilogram_element,kg)){
  pounds_element.value = kg*2.2046; //to pounds
  gram_element.value = kg*1000;       //to grams
  ounce_element.value = kg*35.274;    //to ounces
  shortton_element.value = kg/907.2;
  metricTonElement.value = kg*0.001;
}
}
/*from Ounces To others*/
function fromOuncesToOther(oz){
  oz = parseFloat(oz);
  if(is_valid(ounce_element,oz)){
  pounds_element.value = oz*0.0625;     //to pounds
  gram_element.value = oz/0.035274;       //to grams
  kilogram_element.value = oz/35.274;     //to kg
  shortton_element.value = oz/35270;          //to miligram
  metricTonElement.value = oz*35.273990723;
}
}
/*from miligram to other conversions*/
function fromshorttonToOthers(lb){
  mg = parseFloat(lb);
  if(is_valid(shortton_element,lb)){
  pounds_element.value = lb*2000;     //to pounds
  gram_element.value = lb*907200;          //to grams
  kilogram_element.value = lb*907.185;       //to kg
  ounce_element.value = lb*32000;     //to ounce
  metricTonElement.value = lb/1.102;
}
}
function fromMetricTonToOthers(mt){
  mt = parseFloat(mt);
  if(is_valid(metricTonElement,mt)){
  pounds_element.value = mt*2204.6244202;     //to pounds
  gram_element.value = mt*1000000;          //to grams
  kilogram_element.value = mt*1000;       //to kg
  ounce_element.value = mt*35273.990723;     //to ounce
  shortton_element.value = mt*1.102;
}
}
