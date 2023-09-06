import { useState } from 'react';

function CartIcon () {
  // Our counter state created here
  const [counter, setCounter] = useState(0);

  // This function calls 'setCounter' and
  // we increment 'counter' by 1
  function onButtonClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={onButtonClick}>Add to chart</button>
    </div>
  );
}

export default CartIcon;