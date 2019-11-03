import React from 'react';

const Button = ({color, name, className, onClick}) => {
  return (
    <button
      type="button"
      className={`button ${className}`}
      onClick={onClick}
      style={{backgroundColor: `${color}`}}
    >
      {name || ""}
    </button>
  )
}

export default Button;
