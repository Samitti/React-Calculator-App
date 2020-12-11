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
  if (result.length > 13) {
    const temp = parseInt(result, 10);
    if (temp > 1000000000000) {
      return 'Err';
    }
    result = result.slice(0, 13);
  }
  return result;
};

export default operate;
