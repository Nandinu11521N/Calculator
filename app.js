function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "Error";
    }
    return x / y;
}

function clearDisplay() {
    document.getElementById("result").value = "";
}

function updateDisplay(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var expression = document.getElementById("result").value;
    var result;
    try {
        result = eval(expression);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

