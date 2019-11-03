import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './storeConfig'
import './App.scss';

import ButtonContainer from './components/ButtonContainer';
import ColorToGuessContainer from './components/ColorToGuessContainer';
import HeaderContainer from './components/HeaderContainer'

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="app direction-column">
        <HeaderContainer />
        <div className="flex-center direction-column">
          <ColorToGuessContainer />
          <ButtonContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
