function calculate() {
    if (document.getElementsByTagName('select')[0].value == "+") {
        addition();
    }

    if (document.getElementsByTagName('select')[0].value == "-") {
        subtract();
    }

    if (document.getElementsByTagName('select')[0].value == "*") {
        multiply();
    }

    if (document.getElementsByTagName('select')[0].value == "/") {
        divide();
    }
}

function multiply(){
    num1 = parseInt(document.getElementById('value1').value, 10);
    num2 = parseInt(document.getElementById('value2').value, 10);
    var ans = num1 * num2
    document.getElementById('solution').value = ans.toString()
}

function addition(){
    num1 = parseInt(document.getElementById('value1').value, 10)
    num2 = parseInt(document.getElementById('value2').value, 10)
    var ans = num1 + num2
    document.getElementById('solution').value = ans.toString()
}

function subtract(){
    num1 = parseInt(document.getElementById('value1').value, 10)
    num2 = parseInt(document.getElementById('value2').value, 10)
    var ans = num1 - num2
    document.getElementById('solution').value = ans.toString()
}

function divide(){
    num1 = parseInt(document.getElementById('value1').value, 10)
    num2 = parseInt(document.getElementById('value2').value, 10)
    var ans = num1 / num2
    document.getElementById('solution').value = ans.toString()
}
