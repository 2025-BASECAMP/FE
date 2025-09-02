import React from "react";
import { FaSearch } from "react-icons/fa";
import * as C from "../../styles/common/Common.style";

const Loading = ({ text = "로딩 중..." }) => {
  return (
    <C.Loading>
      <p>
        <FaSearch /> {text}
      </p>
    </C.Loading>
  );
};

export default Loading;
