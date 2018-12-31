var inputText = document.querySelector("#inputText");
inputText.focus();

var addNewItem = function(){
    if(window.event.keyCode === 13 && inputText.value.length > 0){
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);

        var listItem = document.createElement("LI");
        listItem.innerText = inputText.value;
        listItem.appendChild(span);
        todolist.appendChild(listItem);
        inputText.value = "";
    }
}

var todolist = document.querySelector("#todolist");
var checked = function(){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
    }
};

var deleteLi = function(){
    if(event.target.className === "close"){
        event.target.parentNode.remove();
    }
};

var showAll = function(){
    var listOfLi = document.getElementsByTagName("LI");
    for(let i = 0; i < listOfLi.length; i++){
        listOfLi[i].style.display = "block";
    }
};

var showActive = function(){
    var listOfLi = document.getElementsByTagName("LI");
    showAll();
    for(let i = 0; i < listOfLi.length; i++){
        if(listOfLi[i].className === "checked"){
            if(listOfLi[i].style.display === "none"){
                listOfLi[i].style.display = "block";
            } else {
                listOfLi[i].style.display = "none";
            }
        }
    }
};

var showComplete = function(){
    var listOfLi = document.getElementsByTagName("LI");
    showAll();
    for(let i = 0; i < listOfLi.length; i++){
        if(listOfLi[i].className !== "checked"){
            if(listOfLi[i].style.display === "none"){
                listOfLi[i].style.display = "block";
            } else {
                listOfLi[i].style.display = "none";
            }
        }
    }
};

var clearCompleted = function(){
    var listOfLi = document.getElementsByTagName("LI");
    for(let i = 0; i < listOfLi.length; i++){
        if(listOfLi[i].className === "checked"){
            const all = document.querySelectorAll(".checked");
            all.forEach(function(e){
                e.remove();
            });
        }
    }
    showAll();
};

var all = document.querySelector("#all");
all.addEventListener("click", showAll);

var active = document.querySelector("#active");
active.addEventListener("click", showActive);

var complete = document.querySelector("#complete");
complete.addEventListener("click", showComplete);

var clear = document.querySelector("#clear");
clear.addEventListener("click", clearCompleted);

todolist.addEventListener("click", deleteLi)
todolist.addEventListener("click", checked);
inputText.addEventListener("keydown", addNewItem);
