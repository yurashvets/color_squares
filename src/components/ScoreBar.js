import React from 'react';
import { connect } from "react-redux";

const ScoreBar = ({score}) => {
  return (
    <div style={{flex: 1}}><p style={{color: 'white', textAlign: 'center'}}>Score bar:: {score}</p></div>
  );
}

const mapStateToProps = ({
  scoreReducer: { score }
}) => ({
  score
});

export default connect(mapStateToProps)(ScoreBar);
