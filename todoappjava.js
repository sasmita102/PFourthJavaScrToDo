let todoItems = [];
let currentChange;
let icon = document.querySelector(".fa");
let box = document.querySelector("#box");
let blur = document.getElementById("blur");
let notodo = document.getElementById("noTodo");
 var close = document.querySelector(".button2");
let inputfield = document.getElementById("listHeading");
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




btnAdd.addEventListener("click",addNew);
function addNew(){
    inputfieldval = inputfield.value;
    if(inputfieldval.trim()!= 0){
    let webtask = localStorage.getItem("localtask");
    
    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
    }
taskObj.push(inputfieldval);
localStorage.setItem("localtask",JSON.stringify(taskObj));
    }
showtask();

    //const newDiv = document.createElement("div");
    //const newCard = newDiv.classList.add("card");
    
    box.classList.remove("reveal");
    blur.classList.remove("active");
    notodo.classList.toggle("display");
     //Divcontainer.appendChild(newDiv);
    
}
function showtask(){
    let webtask = localStorage.getItem("localtask");
    
    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
    }
    let html = '';
    const Divcontainer = document.getElementById("flex-row-list");
    const node = document.createElement("div");
    taskObj.forEach((item,index) => {
    html += `<div class = "card">
    <div class="name">
        <p class = card-heading>${item}</p>
    <hr width="90%" align="right">
    </div>
    <ul style="list-style-type:none"></ul>
    <div class="footer">
        <button class="btn-completed" onclick = "deleteitem(${index})" ><i class="fa fa-trash" aria-hidden= "true"></i></button>
      <p class="btn-add" onclick = "addtask(${index})"><i class="fa fa-plus-circle"></i></p></div>

</div>`;
    
});

Divcontainer.innerHTML = html;
//Divcontainer.appendChild(node);
console.log(Divcontainer)

}


  
//deleteitem
function deleteitem(index){
    let webtask  = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    taskObj.splice(index,1);
    localStorage.setItem("localtask",JSON.stringify(taskObj));
    showtask();
}

//addfunction
function addtask(index) {
    let webtask = localStorage.getItem("localtask");
    var popup = document.getElementById("box2");
    popup.classList.toggle("reveal");
    localStorage.setItem("localtask",JSON.stringify(taskObj));
    blur.classList.toggle("active");
    showtask();
  }
  var closebtn = document.querySelector(".button4");
closebtn.addEventListener("click",()=>{
    box2.classList.remove("reveal");
    blur.classList.remove("active");
});
//ADDITEM
var buttonAdd = document.querySelector(".button3");
var inputField = document.getElementById("sublistHeading");
const Divcontainer = document.getElementById("flex-row-list");
buttonAdd.addEventListener("click",function(){
var list = document.createElement("li");
list.innerText = inputField.value;
Divcontainer.appendChild(list);
})

  