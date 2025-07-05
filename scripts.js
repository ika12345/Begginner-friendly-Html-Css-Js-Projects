

let runningTotal = 0;
const screen = document.querySelector(".screen");
let buffer = "0";

function buttonClick(value) {
    if(isNaN(parseInt(value))){
        handleSymbol(value)
    }
    else {
        handleNumber(value)
    }
rerender();
    
}

function handleNumber (number){
if (buffer === "0"){
    buffer = number;
}
else {
    buffer += number;
}

}

function handleSymbol (symbol) {
switch(symbol){
    case 'C':
        buffer = '0';
        break;
    case '⬅️':
        if (buffer.length===1){
            buffer = '0';
        }
        else{
            buffer = buffer.substring(0,buffer.length-1);
        }
        break;
    case '+':
        handleMath('+');
        break;     
    case '-':
        handleMath('-');
        break;     
    case '×':
        handleMath('×');
        break;     
    case '÷':
        handleMath('÷');
        break; 
    case '=':
        if (previousOperator === null ) {
            //no math required
            return;
        }   
        flushoperation(parseInt(buffer));
        previousOperator = null;
        buffer = runningTotal + ""
        runningTotal = 0;
        break;

}
console.log(runningTotal);
}


function handleMath (value){
    if (buffer ==='0'){
    return;
    }
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0){
        runningTotal = buffer;
    }
    else {
        flushoperation(intBuffer);
    }
    previousOperator = value;
    buffer = '0';

    
}

function flushoperation(intBuffer){
    switch(previousOperator){
        case '+':
            runningTotal += intBuffer;
            break;
        case '-':
            runningTotal -= intBuffer;
            break;
        case '×':
            runningTotal *= intBuffer;
            break;
        case '÷':
            runningTotal /= intBuffer;
            break;
    }
    

}
function init(){
    console.log("heloojii")
    document.querySelector('.calc-buttons')
    .addEventListener("click",function(event){
        buttonClick(event.target.innerText)
    })
 rerender();   
};

function rerender (){
    screen.innerText = buffer ;
} 
init();