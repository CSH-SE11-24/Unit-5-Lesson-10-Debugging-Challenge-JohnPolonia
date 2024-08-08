console.log("script.js running");

let button = document.querySelector("#lowerCaseButton");
console.log(button);

let h1 = document.getElementById("#hello");
console.log(h1);

button.addEventListener("click", function(event){
  console.log("lowercase clicked") ;
  h1. = "hello there"
})

let button2 = document.querySelector("#UpperCase");
console.log(button);

button2.addEventListener("click", function(event){
  console.log("click") ;
  h1.textContent = "HELLO THERE";
});