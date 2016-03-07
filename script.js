var results = document.getElementById("results");
var stride = document.getElementById("stride");
var pace = document.getElementById("pace");
var submit = document.getElementById("submit");

submit.onclick = function () {

    results.innerHTML = "Ideal BPM:  " + Math.ceil(pace.value / 60 * 5280 * 12 / stride.value);
}; 