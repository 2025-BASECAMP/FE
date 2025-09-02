import React from "react";
import * as C from "../../styles/common/Common.style";

const ErrorBlock = ({ title = "오류", message, footer }) => {
  return (
    <C.ErrorContainer>
      <h2>{title}</h2>
      {message && <p>{message}</p>}
      {footer && <C.ErrorListWrapper>{footer}</C.ErrorListWrapper>}
    </C.ErrorContainer>
  );
};

export default ErrorBlock;
