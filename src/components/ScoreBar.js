import React from 'react';
import { connect } from "react-redux";

import { MAX_ROUDNS } from '../constants'

const ScoreBar = ({score}) => {
  const progress = score/(MAX_ROUDNS + 1) * 100;
  return (
    <div style={{flex: 1}}>
      <p style={{color: 'white', textAlign: 'center'}}>
        {score} out of {MAX_ROUDNS + 1}
      </p>
      <div className="wrapper">
        <div className="progress-bar">
          <span className="progress-bar-fill" style={{width: `${progress}%`}}></span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({
  scoreReducer: { score }
}) => ({
  score
});

export default connect(mapStateToProps)(ScoreBar);
