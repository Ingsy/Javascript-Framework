import React from "react";
import styled from "styled-components";
import CartIcon from "./components/Cart-Icon";

const BaseButton = styled.button`
border: 0;
background: blue; 
color: white; 
border-radius: 6px; 
cursor: pointer;
:hover {
  background: red;
};
`;


function App() {
  return (

    <div><BaseButton>click me</BaseButton>
      <CartIcon />
    </div>
  );
}

export default App;