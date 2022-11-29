import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {Counter} from './src/Counter';
// import Main from './src/main';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
