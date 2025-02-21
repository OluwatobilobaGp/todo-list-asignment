let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteChar() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

document.addEventListener("keydown", function(event) {
    let key = event.key;
    
    if (!isNaN(key) || "+-*/.()".includes(key)) {
        appendToDisplay(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        deleteChar();
    } else if (key === "Escape") {
        clearDisplay();
    }
});


let historyList = document.getElementById("history-list");

function calculateResult() {

    try {

        let expression = display.value;

        let result = eval(expression);

        display.value = result;

        saveToHistory(expression, result);

    } catch {

        display.value = "Error";

    }

}

function saveToHistory(expression, result) {

    let historyItem = document.createElement("li");

    historyItem.textContent = `${expression} = ${result}`;

    historyItem.onclick = function () {

        display.value = expression;

    };

    historyList.prepend(historyItem);

    // Store history in localStorage

    let history = JSON.parse(localStorage.getItem("calcHistory")) || [];

    history.unshift({ expression, result });

    if (history.length > 10) history.pop(); // Keep last 10 records

    localStorage.setItem("calcHistory", JSON.stringify(history));

}

function loadHistory() {

    let history = JSON.parse(localStorage.getItem("calcHistory")) || [];

    history.forEach(item => {

        let historyItem = document.createElement("li");

        historyItem.textContent = `${item.expression} = ${item.result}`;

        historyItem.onclick = function () {

            display.value = item.expression;

        };

        historyList.appendChild(historyItem);

    });

}

window.onload = loadHistory;