import React from 'react';
import { connect } from "react-redux";

import Button from './Button';

const ColorToGuessContainer = ({currentColor}) => {
  return (
    <div className="flex-center">
      <Button
        color={currentColor.color}
        name={currentColor.name}
      />
    </div>
  );
}

const mapStateToProps = ({
  shuffleReducer: { currentColor }
}) => ({
  currentColor
});

export default connect(mapStateToProps)(ColorToGuessContainer);
