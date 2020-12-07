import React from 'react';
import Button from './Button';

export default function ButtonPannel() {
  return (
    <div className="ButtomPannelContainer">
    <div className="rowOne">
      <Button name="AC" />
      <Button name="+/-" />
      <Button name="%" />
      <Button name="÷" />
    </div>
    </div>
  );
}