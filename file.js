document.getElementById('calculate').onclick = function(){
let totalBill = document.getElementById('bill').value;
let serviceLvl = document.getElementsByName('tip');
let guests = document.getElementById('people');
let tip = document.getElementById('tip');

for(let i=0; i < serviceLvl.length; i++){
  if(serviceLvl[i].checked){
    tip.innerHTML = (totalBill * serviceLvl[i].value) / guests.value;
  }
 }
};




