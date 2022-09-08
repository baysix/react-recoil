import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { textState, charCountState } from "../atoms/characterCounter.js";
const CharacterCounter = () => {
  const [text, setText] = useRecoilState(textState);
  const count = useRecoilValue(charCountState);

  const onChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div>
        <input type="text" value={text} onChange={onChange} />
        <br />
        Echo: {text}
        <br />
        Character Count: {count}
      </div>
    </>
  );
};

export default CharacterCounter;
