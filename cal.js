var calculatorElements = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", ".", "=", "/"];
var calculatorPanel = document.querySelector(".calculator-panel");
var displayResultElement = document.querySelector(".display-result");
var tempNumber;
var operator;
var operatorIndex;

function createCalElement(elementName, func) {
    var element = document.createElement("input");
    element.type = "button";
    element.id = "calculator-" + elementName;
    element.value = elementName;
    element.onclick = func;
    return element;
}

function createCalPanel() {
   for(var i = 0; i < calculatorElements.length; i++) {
        var currentRow = document.querySelector(".calculator-panel>tr:last-child");
        if (i % 4 == 0) {
            var trElement = document.createElement("tr");
            calculatorPanel.appendChild(trElement);
            currentRow = trElement;
        }
        var tdElement = document.createElement("td");
        tdElement.appendChild(createCalElement(calculatorElements[i], clickHandler))
        currentRow.appendChild(tdElement);
    } 
}

function clickHandler(event) {
    var targetElement = event.target;
    displayResultElement.value += targetElement.value;
    if ("+" === targetElement.value
        || "-" === targetElement.value
        || "*" === targetElement.value
        || "/" === targetElement.value) {
        tempNumber = Number(displayResultElement.value.slice(0, -1));
        operator = targetElement.value;
        operatorIndex = displayResultElement.value.length;
    } else if ("=" === targetElement.value) {
        var equalIndex = displayResultElement.value.indexOf("=");
        var anotherNumber = Number(displayResultElement.value.slice(operatorIndex, equalIndex));
        switch (operator) {
            case "+":
                displayResultElement.value = tempNumber + anotherNumber;
                break;
            case "-":
                displayResultElement.value = tempNumber - anotherNumber;
                break;
            case "*":
                displayResultElement.value = tempNumber * anotherNumber;
                break;
            case "/":
                displayResultElement.value = tempNumber / anotherNumber;
                break;
        }
        tempNumber = Number(displayResultElement.value);
    }
}

createCalPanel();