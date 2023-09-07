import { useState } from 'react';
import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartButton() {
  // Our counter state created here
  const [clickCount, setClickCount] = useState(0);

  // This function calls 'setClickCount' and
  // we increment 'clickCount' by 1
  const onButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <button className="icon-button" onClick={onButtonClick}>
      
      </button>
      <p>Click Count: {clickCount}</p>
    </div>
  );
}

export default CartButton;