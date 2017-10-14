import mul from './math.js';

var myHeading = document.querySelector('#div_title');
var old = myHeading.innerHTML;
myHeading.innerHTML = old + '<p>Hello!!</p>'

var helloDiv = document.querySelector('#hello_div');
helloDiv.innerHTML = hello();

function hello() {
    return 'hello';
}

function showResult() {
    var x = document.querySelector('input[name="x"]').value;
    var y = document.querySelector('input[name="y"]').value;
    document.querySelector('#div_result').innerHTML = mul(x, y);
}

document.querySelector('input[name="showResult"]').onclick = () => showResult();

/*
document.querySelector('html').onclick = function() {
    alert('Hello Event');
}
*/

var number1,number2;
var operator;
document.querySelector('input[name="onenumber"]').onclick = function() {
    document.querySelector('.result').innerHTML = '1';
}

document.querySelector('input[name="twonumber"]').onclick = function() {
    document.querySelector('.result').innerHTML = '2';
}

var inputArray = [];
function appendResult(content) {
    var result = document.querySelector('.result');
    result.innerHTML += content;
}

function buttonClickHandler(event) {
    var value = event.target.value;
    var number = Number(value);
    if (number) {
        inputArray.push(number);
    }
    appendResult(value);
}

function resultClickHandler(event) {
    buttonClickHandler(event);
    appendResult(mul(inputArray[0], inputArray[1]));
}

function clearResultHandler(event) {
    inputArray = [];
    document.querySelector('.result').innerHTML = '';
}

function createButton(parentNode, id, value) {
    var numberButtonElement = document.createElement("input");
    numberButtonElement.setAttribute("type", "button");
    numberButtonElement.setAttribute("id", id);
    numberButtonElement.setAttribute("value", value);
    numberButtonElement.onclick = buttonClickHandler;
    parentNode.appendChild(numberButtonElement);

    return numberButtonElement;
}

var map = {
    "mul-1": "1",
    "mul-2": "2",
    "mul-3": "3",
    "mul-4": "4",
    "mul-5": "5",
    "mul-6": "6",
    "mul-7": "7",
    "mul-8": "8",
    "mul-9": "9",
    "mul-0": "0",
    "mul-*": "*"
}

for(let item in map) {
    var parentNode;
    if (["mul-1","mul-2","mul-3","mul-4","mul-5"].includes(item)) {
        parentNode = document.getElementById('number-pad-r1');
    }
    else if (["mul-6","mul-7","mul-8","mul-9","mul-0"].includes(item)) {
        parentNode = document.getElementById('number-pad-r2');
    } else {
        parentNode = document.getElementById('number-pad-r3');
    }
    createButton(parentNode, item, map[item]);
}

document.querySelector('#equal').onclick = resultClickHandler;
document.querySelector('#clear').onclick = clearResultHandler;
