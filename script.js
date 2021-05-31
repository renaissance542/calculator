let displayValue = '';
let storedValue = null;
let selectedOperator = '';
const display = document.getElementById('display');
const displaySize = 12;
display.innerHTML = displayValue;

document.getElementById('container')
        .addEventListener('click', processClick);
window.addEventListener('keydown', processClick);

function add(a, b) {
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function divide(a, b){
    return a/b;
}

function multiply(a, b) {
    return a*b;
}

function operate(a, b, operand) {
    let result = 0;
    switch (operand){
        case '+':
            result = add(a,b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
        default:
            console.log('operand not found');
            break;
    }
    return result;
}

function processClick(event) {
    let key;
    if (event.keyCode) {
        key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    } else {
        key = event.srcElement; 
    }

    if (!key.classList.contains('keys')){
        return;
    }

    switch (key.classList[1]) {
        case 'number-key':
            updateDisplay(key);
            break;
        case 'function-key':
            processFunctionKey(key);
            break;
        case 'operator-key':
            processOperatorKey(key);
            break;
        default:
            console.log('no key class found');
            break;
    }

    event.stopPropagation();
    
}

function updateDisplay (key){
    let char = key.innerHTML;
    if ((displayValue.length > displaySize)
        || (char === '.' && displayValue.includes('.'))
    ) {
        return;
    }
    displayValue += char;
    display.innerHTML = displayValue;
}

function processOperatorKey(key) {
    solveOperation();  
    selectedOperator = key.innerHTML;
    storedValue = Number(displayValue);
    displayValue = '';
}

function processFunctionKey(key){
    switch (key.innerHTML) {
        case '=':
            solveOperation();
            break;
        case 'Del':
            setDisplayString(displayValue.slice(0, -1));
            break;
        case 'AC':
            setDisplayString('');
            storedValue = null;
            selectedOperator = '';
            break;
        case '√':
            let result = Math.sqrt(Number(displayValue));
            setDisplayString(roundToDisplaySize(result).toString());
            selectedOperator = null; 
            storedValue =  null;
            break;   
        case 'On/Off':
            break;
        default:
            break;
    }
}

function setDisplayString(value){
    displayValue = value;
    display.innerHTML = displayValue;
}

function solveOperation(){
    if (storedValue && displayValue && selectedOperator){
        if (displayValue === '0' 
            && selectedOperator === '/'){
                setDisplayString('80085');
                return;
        }
        let result = operate(
                storedValue, Number(displayValue), 
                selectedOperator);
        
                
        displayValue = roundToDisplaySize(result).toString();
        setDisplayString(displayValue);
        selectedOperator = null; 
        storedValue =  null;       
    }
}

function roundToDisplaySize(n){
    let stringN = n.toString();
    let result = n;
    if (n > 999999999 || n < .0000001) {
        return n.toExponential(displaySize-4);
    }
    let decimalPosition = stringN.indexOf('.');
    let length = stringN.length;
    if(decimalPosition >= 0 && length > displaySize) {
       result *= Math.pow(10, displaySize-decimalPosition);
       result = Math.round(result);
       result /= Math.pow(10, displaySize-decimalPosition);
    }
    return result;
}












