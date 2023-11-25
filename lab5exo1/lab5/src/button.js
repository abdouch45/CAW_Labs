import React, { useState } from 'react';

const ButtonComponent = ({ props }) => {
  const [isClicked, setIsClicked] = useState(0);

  const handleClick = () => {
    setIsClicked(isClicked+1);
  };

  return (
    <div>
      <button onClick={handleClick}>Button {props.buttonNumber}</button>
      {isClicked%2===1 && <p>Button #{props.buttonNumber} was clicked</p>}
      {isClicked%2===0 && <p>Button #{props.buttonNumber} was not clicked</p>}
    </div>
  );
};

export default ButtonComponent;
