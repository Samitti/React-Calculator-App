import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstNum = Big(numberOne);
  const secondNum = Big(numberTwo);
  let result = 0;

  if (operation === '+') {
    result = firstNum.plus(secondNum).toString();
  } else if (operation === '-') {
    result = firstNum.minus(secondNum).toString();
  } else if (operation === 'X') {
    result = firstNum.times(secondNum).toString();
  } else if (operation === '÷') {
    result = firstNum.div(secondNum).toString();
  } else if (operation === '%') {
    result = firstNum.mod(secondNum).toString();
  }
  return result;
};

export default operate;
