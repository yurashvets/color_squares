import React from 'react';

const Button = ({color, name, className, onClick, disabled}) => {
  return (
    <button
      type="button"
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={{backgroundColor: `${disabled ? '#aaa' : color}`}}
    >
      {name || ""}
    </button>
  )
}

export default Button;
