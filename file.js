function calculate(){
let totalBill = document.getElementById('bill').value;
let serviceLvl = document.getElementById('serviceLvl').value;
let guests = document.getElementById('people').value;

let total = (totalBill * serviceLvl) / guests;
 document.getElementById('tip').innerHTML = total;
}


document.getElementById('calculate').onclick = function(){
  calculate();
}
