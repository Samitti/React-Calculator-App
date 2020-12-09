import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstNum = Big(numberOne);
  const secondNum = Big(numberTwo);
  let result = 0;

  if (operation === '+') {
    result = firstNum.plus(secondNum);
  } else if (operation === '-') {
    result = firstNum.minus(secondNum);
  } else if (operation === 'X') {
    result = firstNum.times(secondNum);
  } else if (operation === '÷') {
    result = firstNum.div(secondNum);
  } else if (operation === '%') {
    result = firstNum.mod(secondNum);
  }
  return result;
};

export default operate;
