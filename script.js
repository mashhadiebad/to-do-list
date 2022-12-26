document.getElementById("add").addEventListener("click",function() {
    var task = document.getElementById("text").value ;
    if (task) {
        addNewTask(task);
        document.getElementById("text").value = "";
    }

});

function deleteItem(){
	var item = this.parentNode.parentNode;
	var parent = item.parentNode; 

	parent.removeChild(item);
}

function finishItem(){
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;
	var parentId = parent.id;
	
	
	var target = (parentId === "todo") ? document.getElementById("completed"):document.getElementById("todo");

	parent.removeChild(item);
	target.insertBefore(item, target.childNodes[0]);
}


function addNewTask(item){
	var list = document.getElementById("todo");

	var newItem = document.createElement("li");
	newItem.innerText = item;

	var buttons = document.createElement("div");
	buttons.classList.add("buttons");

	
	var remove = document.createElement("button");
	remove.classList.add("delete");
	remove.addEventListener("click", deleteItem);

	var complete = document.createElement("button");
	complete.classList.add("finish");
  complete.addEventListener("click", finishItem);

	buttons.appendChild(remove);
	buttons.appendChild(complete);
	newItem.appendChild(buttons);

	list.insertBefore(newItem, list.childNodes[0]);
}



var deleteIt = document.getElementsByClassName("delete");
for (var i = 0; i < deleteIt.length; i++){
	deleteIt[i].addEventListener("click", deleteItem);
}

var changeIt = document.getElementsByClassName("finish");
for (var i = 0; i < changeIt.length; i++){
	changeIt[i].addEventListener("click", finishItem);
}