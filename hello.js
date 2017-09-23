var myHeading = document.querySelector('#div_title');
var old = myHeading.innerHTML;
myHeading.innerHTML = old + '<p>Hello!!</p>'

var helloDiv = document.querySelector('#hello_div');
helloDiv.innerHTML = hello();

function hello() {
    return 'hello';
}

function mul(x, y) {
    return x * y;
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

function createButton(id, value) {
    var numberButtonElement = document.createElement("input");
    numberButtonElement.setAttribute("type", "button");
    numberButtonElement.setAttribute("id", id);
    numberButtonElement.setAttribute("value", value);
    numberButtonElement.onclick = buttonClickHandler;
    document.querySelector('.calculate').appendChild(numberButtonElement);

    return numberButtonElement;
}

var map = {
    "mul-1": "1",
    "mul-2": "2",
    "mul-3": "3",
    "mul-4": "4",
    "mul-*": "*"
}

var elementKey = "mul-1";
createButton(elementKey, map[elementKey]);

var elementKey = "mul-2";
createButton(elementKey, map[elementKey]);

var elementKey = "mul-3";
createButton(elementKey, map[elementKey]);

var elementKey = "mul-4";
createButton(elementKey, map[elementKey]);

var elementKey = "mul-*";
createButton(elementKey, map[elementKey]);

document.querySelector('#equal').onclick = resultClickHandler;
document.querySelector('#clear').onclick = clearResultHandler;
