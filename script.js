function Solve(val) {
    const display = document.getElementById('res');
    display.value += val;
}

function Result() {
    const display = document.getElementById('res');
    try {
        // Replace 'x' with '*' for eval to process correctly
        const result = eval(display.value.replace(/x/g, '*'));
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function Clear() {
    document.getElementById('res').value = '';
}

function Back() {
    const display = document.getElementById('res');
    display.value = display.value.slice(0, -1);
}

// Event listener for keyboard support
document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';

    if (validKeys.includes(key)) {
        Solve(key === '*' ? 'x' : key);  // Display 'x' but interpret as '*'
    } else if (key === 'Enter') {
        event.preventDefault();  // Prevents default Enter action on forms
        Result();
    } else if (key === 'Backspace') {
        Back();
    } else if (key.toLowerCase() === 'c') {
        Clear();
    }
});
