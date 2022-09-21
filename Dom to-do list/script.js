var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener('click', toggleMark);
	ul.appendChild(li);
	input.value = "";

    function toggleMark() {
		li.classList.toggle("done");
	}

	var delBtn = document.createElement("button");
	delBtn.addEventListener('click', byeItem);
	li.append(delBtn);
    
	function byeItem() {
		li.remove();
	}
	// if you want to manipulate the creat list you must do it in the lexical envoitnment other wise javascript cant see it.
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function byeItem() {
	li.remove();
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);