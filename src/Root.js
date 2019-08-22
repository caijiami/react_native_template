import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/ConfigureStore';
import Main from './Main';


const store = configureStore();

export default class Roots extends Component {
  render() {
    return (
      <Provider store={store}>
            <Main />
      </Provider>
    )
  }
}
