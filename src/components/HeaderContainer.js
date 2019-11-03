import React from 'react';
import { connect } from "react-redux";

import { startGame } from "../actions/game";

import CountdownTimer from './CountdownTimer'
import ScoreBar from './ScoreBar';
import Button from './Button';

const HeaderContainer = ({startGame}) => <div className="flex-center timer-score-container">
  <CountdownTimer />
  <Button
    color="rgb(159, 99, 214)"
    name="Start Game"
    className="startButton"
    onClick={startGame}
  />
  <ScoreBar />
</div>

const mapDispatchToProps = {
  startGame,
}

export default connect(null, mapDispatchToProps)(HeaderContainer);
