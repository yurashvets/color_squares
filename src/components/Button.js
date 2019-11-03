import React from 'react';

const Button = ({color, name, onClick}) => {
  return (
    <button
      type="button"
      className="button"
      onClick={onClick}
      style={{backgroundColor: `${color}`}}
    >
      {name || ""}
    </button>
  )
}

export default Button;
