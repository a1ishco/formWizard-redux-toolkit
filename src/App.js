import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Wizard from './components/Wizard/Wizard';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Wizard />
      </div>
    </Provider>
  );
}

export default App;
