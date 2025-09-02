import React from "react";
import * as C from "../../styles/common/Common.style";

const EndMessage = ({ text }) => {
  return (
    <C.EndMessage>
      <p>{text}</p>
    </C.EndMessage>
  );
};

export default EndMessage;
