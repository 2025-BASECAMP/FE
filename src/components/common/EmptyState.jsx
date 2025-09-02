import React from "react";
import * as C from "../../styles/common/Common.style";

const EmptyState = ({ title, description }) => {
  return (
    <C.EmptyState>
      {title && <p className="title">{title}</p>}
      {description && <p className="desc">{description}</p>}
    </C.EmptyState>
  );
};

export default EmptyState;