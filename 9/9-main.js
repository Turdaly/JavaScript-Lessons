document.addEventListener('DOMContentLoaded', function() {
    let coundDisplay = document.querySelector('.count-display')
    let incrementButton = document.querySelector('.increment-button')
    
    function incrementCount() {
        coundDisplay.textContent = parseInt(coundDisplay.textContent) + 1;
    }
    
    incrementButton.addEventListener('click', incrementCount);
})

document.addEventListener('DOMContentLoaded', function() {
    let inputColor = document.querySelector('.input-color');
    let clearButton = document.querySelector('.clear-color-button');
    let colorBlock = document.querySelector('.color-block');
    
    function paintBlock() {
        colorBlock.style.backgroundColor = inputColor.value

    }

    inputColor.addEventListener('input', paintBlock);

    clearButton.addEventListener('click', function() {
        inputColor.value = ''
        colorBlock.style.removeProperty('background-color')
    })
    
})