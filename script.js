var enterButton = document.getElementById("enterButton");
var itemInput = document.getElementById("itemInput");
var shoppingList = document.getElementById("shoppingList");
// var li = document.createElement("li");
var removeButtons = document.getElementsByClassName("removeItem");

var createListItem = function (event) {
    var li = document.createElement("li");
    var span = document.createElement("span");
    span.innerHTML = itemInput.value;
    var removeButton = document.createElement("button");
    removeButton.className = 'removeItem';
    removeButton.innerHTML = " X ";
    removeButton.addEventListener("click", delListItem);

    li.append(removeButton);
    li.append(span);
    shoppingList.appendChild(li);
    itemInput.value = "";
}

var addListItem = function (event) {
    console.log(event);
    if (itemInput.value != '' && (!event.keyCode || event.keyCode == 13)) {
        createListItem(event);
    }
}

var delListItem = function (event) {

    var liDel = event.path[1];
    console.log(liDel);
    liDel.style.display = "none";
    console.log(event);
}

enterButton.addEventListener("click", addListItem);
itemInput.addEventListener("keypress", addListItem);
// console.log(removeButtons);
