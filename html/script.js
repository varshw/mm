function display(value) {
    document.getElementById('display').value += value;
}

function clearElements() {
    document.getElementById('display').value = '';
}

function calculate() {
    document.getElementById('display').value = eval(document.getElementById('display').value);
}
function fact1(num) 
{
if (num == 0) {
return 1;
}
else {
return num * fact( num - 1 );
}
}

function fact()
{
var num = document.getElementById('display').value;
var f = fact1(num);
document.getElementById('display').value= f ;
}