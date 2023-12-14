var num1 = 5;
var num2 = 10;

const numExhanger = () => {
    
    console.log(`BEFORE: num1 = ${num1} & num2 = ${num2}`);

    num1 = num1 + num2
    num2 = num1 - num2
    num1 = num1 - num2

    console.log(`AFTER: num1 = ${num1} & num2 = ${num2}`);
}

numExhanger()