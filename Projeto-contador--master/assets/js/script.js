var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

var button_plus = document.getElementsByName("adicionar") [0]
button_plus.addEventListener('click', increment)


var button_mimum = document.getElementsByName("subtrair")[0]
button_mimum.addEventListener('click',decrement)   


function increment () {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber == 5) {
        button_plus.disabled = true;
        button_mimum.disabled = false;
    }
    if (currentNumber > 0) {
        currentNumberWrapper.style.color = 'black';
        currentNumberWrapper.style.fontWeight = 'normal';
    }
}

function decrement () {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber == -5) {
        button_mimum.disabled = true;
        button_plus.disabled = false;
    }

    if(currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
        currentNumberWrapper.style.fontWeight = 'bold';
    }
}