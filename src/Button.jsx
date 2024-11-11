import React from "react";

function Button({ onClick, styles, children, border, bgColor }) {
  return (
    <button
      onClick={onClick}
      className={styles}
      style={{ border, backgroundColor: bgColor }}
    >
      {children}
    </button>
  );
}

export default Button;
