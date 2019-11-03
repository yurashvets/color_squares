import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './storeConfig'
import './App.css';

import ButtonContainer from './components/ButtonContainer';
import ColorToGuessContainer from './components/ColorToGuessContainer';
import CountdownTimer from './components/CountdownTimer'
import ScoreBar from './components/ScoreBar';

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="app direction-column">
        <div className="flex-center timer-score-container">
          <CountdownTimer />
          <ScoreBar />
        </div>
        <div className="flex-center direction-column">
          <ColorToGuessContainer />
          <ButtonContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
