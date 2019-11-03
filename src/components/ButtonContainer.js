import React from 'react';
import { connect } from "react-redux";

import { updateScore } from "../actions/score";

import Button from './Button';

const ButtonContainer = ({colorSet, currentColor, isStarted, updateScore}) => {
  const handleClick = name => {
    if (isStarted && name === currentColor.name) {
      updateScore();
    }
  }
  return (
    <div className='flex-center'>
      {
        colorSet.map(item =>
          <Button
            key={item.name}
            color={item.color}
            onClick={() => handleClick(item.name)}
          />
        )
      }
    </div>
  );
}

const mapStateToProps = ({
  shuffleReducer: { colorSet, currentColor },
  gameReducer: { isStarted },
}) => ({
  colorSet, currentColor, isStarted
});

const mapDispatchToProps = {
  updateScore,
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonContainer);
