import React from "react";

function Button({ onClick, styles, children }) {
  return (
    <button
      onClick={onClick}
      className={styles}
      style={{ cursor: "pointer", border: "1px solid #7950f2" }}
    >
      {children}
    </button>
  );
}

export default Button;
