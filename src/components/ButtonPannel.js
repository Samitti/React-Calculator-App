import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const buttonNames = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
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
                  clickHandler={clickHandler}
                />
              ))
            }
          </div>
        ))
      }
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
