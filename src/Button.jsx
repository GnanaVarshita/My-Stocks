import React from "react";
import { useState } from "react";
function Button() {
  const [para, setPara] = useState("Button not clicked Yet");
  function handleClick() {
    setPara("Button is Clicked");
  }
  return (
    <div>
      <button onClick={handleClick}>Click me to view events</button>
      <br />
      {para}
    </div>
  );
}

export default Button;
