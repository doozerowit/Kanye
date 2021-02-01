//Mes selecteurs
var mybutton = document.getElementById("mybutton");
var quote = document.getElementById("quote");
//mes variables

var citation = "";

//mes evevenements


window.onload = async() => {  
  await fetch("https://api.kanye.rest")
  .then(reponse => reponse.json())
  .then(data => citation = data.quote);
    quote.textContent = citation;
  }
mybutton.addEventListener('click' , async() =>{
    await fetch("https://api.kanye.rest")
    .then(reponse => reponse.json())
    .then(data => citation =data.quote);
    quote.textContent =citation;
})