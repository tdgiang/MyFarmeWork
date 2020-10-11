/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import StackNavigation from './src/routers/stackNavigation';
import reducer from './src/redux/reducers/reducer';

//redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/saga/rootSaga';


const sagaMiddleware = createSagaMiddleware();

let store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store} >
      <StackNavigation />
    </Provider>
  );
};


export default App;
