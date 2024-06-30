import { useRef } from "react";

const InputRefButton = () => {
  const inputRef = useRef(null);

  const inputFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter the text" />
      <button onClick={inputFocus}>Add Click</button>
    </div>
  );
};
export default InputRefButton;
