import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const buttonNames = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const createID = prefix => `${prefix}-${new Date().getTime()}`;

  return (
    <div className="button-panel">
      {
        buttonNames.map((buttonRow, rowIndex) => (
          <div key={createID(rowIndex)}>
            {
              buttonRow.map(buttonName => (
                <Button
                  name={buttonName}
                  key={createID(buttonName)}
                />
              ))
            }
          </div>
        ))
      }
    </div>
  );
};

export default ButtonPanel;
