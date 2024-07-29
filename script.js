// Get the display element
const display = document.getElementById('display');

// Append a value to the display
function appendToDisplay(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Delete the last character from the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result of the expression in the display
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}


