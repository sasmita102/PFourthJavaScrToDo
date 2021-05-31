let todoItems = [];
let icon = document.querySelector(".fa");
let box = document.querySelector("#box");
let blur = document.getElementById("blur");
let notodo = document.getElementById("noTodo");
  var close = document.querySelector(".button2");
  //let inputfield = document.getElementById("listHeading");
//console.log (heading)
icon.addEventListener("click",()=>{
    box.classList.toggle("reveal");
    blur.classList.toggle("active");
})

var close = document.querySelector(".button2");
close.addEventListener("click",()=>{
    box.classList.remove("reveal");
    blur.classList.remove("active");
})
const btnAdd = document.querySelector(".button1");
const Divcontainer = document.getElementById("flex-row-list");
const inputfield = document.getElementById("listHeading");
btnAdd.addEventListener("click",addNew);
function addNew(){
    const newDiv = document.createElement("div");
    const newCard = newDiv.classList.add("card");
    box.classList.remove("reveal");
    blur.classList.remove("active");
    notodo.classList.toggle("display");
     Divcontainer.appendChild(newDiv);
    
}



