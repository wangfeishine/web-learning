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
