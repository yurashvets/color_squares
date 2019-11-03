import React from 'react';
import { connect } from "react-redux";

import { resetGame } from '../actions/game';

import Button from './Button';
import Modal from './Modal';

const ColorToGuessContainer = ({currentColor, isFinished, score, resetGame}) => {
  return (
    <React.Fragment>
      <div className="flex-center">
        <Button
          color={currentColor.color}
          name={currentColor.name}
        />
      </div>
      {
        isFinished && <Modal>
          <div className="modal-background">
            <div className="modal">
              <p>Your score is {score}</p>
              <Button
                color="gray"
                name="Finish"
                className="startButton"
                onClick={resetGame}
              />
            </div>
          </div>
        </Modal>
      }
    </React.Fragment>
  );
}

const mapStateToProps = ({
  shuffleReducer: { currentColor },
  gameReducer: { isFinished },
  scoreReducer: { score }
}) => ({
  currentColor, isFinished, score
});

const mapDispatchToProps = {
  resetGame,
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorToGuessContainer);
