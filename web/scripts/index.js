var $allButtons = document.getElementsByClassName('calculator__key');
var memory;
var operationMemory;
var isSecondNumber = false;

for (var i=0; i<$allButtons.length; i++){
    $allButtons[i].onclick = buttonClick;
}

function buttonClick(){
    /*if (this.value == "=") {
        document.getElementById("display").value = eval(document.getElementById("display").value).toString(8);
    }else if (this.value == "c"){
        document.getElementById("display").value = "";
    }else if (this.value == "<-"){
        document.getElementById("display").value = document.getElementById("display").value.substr(0, document.getElementById("display").value.length -1);
    }else{
        document.getElementById("display").value += this.value;
    }*/
    if (!isNaN(this.value)){
        document.getElementById("display").value += this.value.toString(8);
    }else if (this.value == "="){
        if (operationMemory == "+"){
            document.getElementById("display").value = (+memory.toString(10) + +document.getElementById("display").value.toString(10)).toString(8);
        }else
        if (operationMemory == "-"){
            document.getElementById("display").value = (+memory.toString(10) - +document.getElementById("display").value.toString(10)).toString(8);
        }else
        if (operationMemory == "*"){
            document.getElementById("display").value = (+memory.toString(10) * +document.getElementById("display").value.toString(10)).toString(8);
        }else
        if (operationMemory == "/"){
            document.getElementById("display").value = (+memory.toString(10) / +document.getElementById("display").value.toString(10)).toString(8);
        }
    }else if (this.value == "+" || this.value == "-" || this.value == "*" || this.value == "/"){
        memory = document.getElementById("display").value;
        operationMemory = this.value;
        document.getElementById("display").value = "";
    }else if (this.value == "c"){
        memory = "";
        operationMemory = "";
        document.getElementById("display").value = "";
    }else if (this.value == "<-"){
        document.getElementById("display").value = document.getElementById("display").value.substr(0, document.getElementById("display").value.length -1);
    }
}

function makeOperation() {
    memory = document.getElementById("display").value;
    document.getElementById("display").value = "";
}
