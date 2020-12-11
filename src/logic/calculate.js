import operate from './operate';

const calculate = (calcData, btnName) => {
  let { total, next, operation } = calcData;
  const operators = ['+', '-', '÷', 'X', '%'];
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (nums.includes(btnName)) {
    if (next != null) {
      next += btnName;
    } else {
      next = btnName;
    }
  } else if (btnName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (btnName === '+/-') {
    next *= -1;
  } else if (operators.includes(btnName)) {
    if (next && total) {
      total = operate(total, next, operation);
      next = null;
      operation = btnName;
    } else if ((total === null) && next) {
      total = next;
      next = null;
      operation = btnName;
    } else if ((next === null) && total) {
      operation = btnName;
    }
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
