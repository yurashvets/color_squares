import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { startGame } from "../actions/shuffleColors";
import { updateScore } from "../actions/score";

import Button from './Button';

const ButtonContainer = ({colorSet, currentColor, startGame, updateScore}) => {
  useEffect(() => {
    startGame();
  }, [startGame]);
  const handleClick = name => {
    if (name === currentColor.name) {
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
  shuffleReducer: { colorSet, currentColor }
}) => ({
  colorSet, currentColor
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      startGame,
      updateScore,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ButtonContainer);
