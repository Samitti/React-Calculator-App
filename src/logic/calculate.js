import operate from './operate';

const calculate = (calcData, btnName) => {
  let { total, next, operation } = calcData;
  const operators = ['+', '-', '÷', 'X', '%'];

  if (btnName === 'AC') {
    total = 0;
    next = null;
    operation = null;
  } else if (btnName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (btnName === '%') {
    total = operate(total, next, operation);
    next = null;
    operation = null;
  } else if (operators.includes(btnName)) {
    operate(total, next, operation);
  } else if ((btnName === '=') && (next && total)) {
    total = operate(total, next, operation);
    next = null;
    operation = null;
  } else if (btnName === '.' && next) {
    if (!next.includes('.')) {
      next += '.';
    }
  }
  return { total, next, operation };
};

export default calculate;
