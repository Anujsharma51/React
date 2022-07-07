// counterValue;
// incrementCounter;
// decrementCounter;
let value = 0;
let counter = document.getElementById("counterValue");
let inc = document.getElementById("incrementCounter");
let dec = document.getElementById("decrementCounter");

counter.innerHTML = value;
inc.addEventListener("click", function () {
  //tgg
  counter.innerHTML = value++;
});
dec.addEventListener("click", function () {
  //tgg
  counter.innerHTML = value--;
});
