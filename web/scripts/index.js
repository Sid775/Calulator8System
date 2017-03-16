var $allButtons = document.getElementsByClassName('calculator__key');
var memory;
var operationMemory;
var isSecondNumber = false;

for (var i=0; i<$allButtons.length; i++){
    $allButtons[i].onclick = buttonClick;
}

function buttonClick(){
    if (this.value == "=") {
        document.getElementById("display").value = eval(document.getElementById("display").value).toString(8);
    }else if (this.value == "c"){
        document.getElementById("display").value = "";
    }else if (this.value == "<-"){
        document.getElementById("display").value = document.getElementById("display").value.substr(0, document.getElementById("display").value.length -1);
    }else{
        document.getElementById("display").value += this.value;
    }
}

function makeOperation() {
    memory = document.getElementById("display").value;
    document.getElementById("display").value = "";
}
