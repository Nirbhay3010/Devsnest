import { useState } from "react";
import "./Counter.css"
const Counter = () => {
  const [text, setText] = useState(0);
  return (
    <button
      className="counterbtn"
      onClick={() => {
        setText(text + 1);
      }}
    >
      {text}
    </button>
  );
};

export default Counter;