let body = document.querySelector("body");

function modeChange() {
     if(body.classList.contains("lightTheme")) {
          body.classList.remove("lightTheme");
          body.classList.add("darkTheme");
     } else {
          body.classList.remove("darkTheme");
          body.classList.add("lightTheme");
     }
}

const display = document.getElementById("display");

function appendToDisplay(input) {

    display.value+= input;
}
function calculate() {
        try {
            let display = document.getElementById("display");
            let input = display.value;
    
            if (/^[0-9+\-*/().\s]+$/.test(input)) {

                let result = eval(input);
                display.value = `${input} = ${result}`;
                alert(`ans = ${result}`);
            } else {

                let powerRegex = /(\d+)\s*\^\s*(\d+)/;

                let sqrtRegex = /√(\d+)/
                ;

                let matchPower = input.match(powerRegex);
                let matchSqrt = input.match(sqrtRegex);

                if (matchPower) {
                    let base = parseFloat(matchPower[1]);
                    let exponent = parseFloat(matchPower[2]);
                    let result = Math.pow(base, exponent);
                    display.value = `${base}^${exponent} = ${result}`;
                    alert(`ans = ${result}`);
                } else if (matchSqrt) {
                    let operand = parseFloat(matchSqrt[1]);
                    if (operand >= 0) {
                        let result = Math.sqrt(operand);
                        display.value = `sqrt(${operand}) = ${result}`;
                        alert(`ans = ${result}`);
                    } else {
                        throw new Error("Invalid Input");
                    }
                } else {
                    throw new Error("Invalid Input");
                }
            }
        } catch(error) {
            display.value = "Syntax Error";
    }
}
function clearAll() {

    display.value = "";
}
function calPower() {

    try{
        let input = display.value;

                let match = input.match(/(\d+)\s*\^\s*(\d+)/);

                if (match) {
                    let base = parseFloat(match[1]);
                    let exponent = parseFloat(match[2]);
                    let result = Math.pow(base, exponent);
                    display.value = `${base}^${exponent} = ${result}`;
                } else {
                    throw new Error("Invalid Input");
                }
            } catch(error) {
                display.value = "Syntax Error";
            }
        }
function exit() {

    display.value = "";
    window.close();
}
