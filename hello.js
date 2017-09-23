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
/*
document.querySelector('input[name="onenumber1"]').onclick = function() {
    number1 = document.querySelector('input[name="onenumber1"]').value
}

document.querySelector('input[name="twonumber1"]').onclick = function() {
    number2 = document.querySelector('input[name="twonumber1"]').value
}

document.querySelector('input[name="operatormul"]').onclick = function() {
    operator = document.querySelector('input[name="operatormul"]').value
}

document.querySelector('input[name="equal"]').onclick = function() {
    switch (operator) {
        case "*" :
            document.querySelector('.result').innerHTML = mul(number1, number2);
            break;
    }
}
*/
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
    return numberButtonElement;
}

for(let i = 1; i < 5; i++) {
    document.querySelector('.calculate').appendChild(createButton("cal-"+i, i));
}

var numberButtons = ['cal-1', 'cal-2', 'cal-3', 'cal-4', 'opt-mul'];

for(let i = 0; i < numberButtons.length; i++) {
    let completeName = '#' + numberButtons[i];
    document.querySelector(completeName).onclick = buttonClickHandler;
}
document.querySelector('#equal').onclick = resultClickHandler;
document.querySelector('#clear').onclick = clearResultHandler;
