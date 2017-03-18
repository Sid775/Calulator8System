var $allButtons = document.getElementsByClassName('calculator__key');
var $generateButton = document.getElementById('generateButton');

for (var i=0; i<$allButtons.length; i++){
    $allButtons[i].onclick = buttonClick;
}

$generateButton.onclick = generateTest;

function buttonClick() {
    if (!isNaN(this.value)){
        document.getElementById('result').value += this.value;
    }else if (this.value == "c"){
        document.getElementById('result').value = "";
    }else if (this.value == "<-"){
        document.getElementById('result').value = document.getElementById('result').value.substr(0, document.getElementById('result').value.length -1);
    }else if(this.value == "="){
        if(+getResult() == +document.getElementById('result').value){
            alert("Верно")
        }else {
            alert("Неверно")
        }
    }

}

function generateTest() {
    document.getElementById('firstNumber').value = randomInteger(0,7).toString(8);
    document.getElementById('sign').value = randomChar();
    document.getElementById('secondNumber').value = randomInteger(0,7).toString(8);

    document.getElementById('result').value = getResult();
}

function getResult() {
    var result;
    if (document.getElementById('sign').value == "+"){
        result = (+document.getElementById('firstNumber').value + +document.getElementById('secondNumber').value).toString(8);
    }else if (document.getElementById('sign').value == "-"){
        result = (+document.getElementById('firstNumber').value - +document.getElementById('secondNumber').value).toString(8);
    }else if (document.getElementById('sign').value == "*"){
        result = (+document.getElementById('firstNumber').value * +document.getElementById('secondNumber').value).toString(8);
    }else if (document.getElementById('sign').value == "/"){
        result = (+document.getElementById('firstNumber').value / +document.getElementById('secondNumber').value).toString(8);
    }
    return result;
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

function randomChar()
{
    var text = "";
    var possible = "+-*/";

    for( var i=0; i < 1; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}


