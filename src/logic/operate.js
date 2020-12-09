import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstNum = Big(numberOne);
  const secondNum = Big(numberTwo);
  let result;
  if(operation == '+') {
    result = firstNum.plus(secondNum).toString();
  }
  if(operation == '-') {
    result = firstNum.minus(secondNum).toString();
  }
  if(operation == 'X') {
    result = firstNum.times(secondNum).toString();
  }
  if(operation == '÷') {
    if(secondNum == 0) {
      result = 'Err'
    }
    else {
    result = firstNumber.div(secondNumber).toString();
    }
  }
  return result;
};

export default operate;