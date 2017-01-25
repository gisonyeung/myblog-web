import React from 'react';
import { render } from 'react-dom';
import RouteController from './layout/RouteController';
import { Provider } from "react-redux";
import Store from "./store/Store";


if(module.hot) {
    module.hot.accept();
}

require('./sources/sass/main.scss');

render(
  <Provider store={ Store() }>
  	<RouteController />
  </Provider>
  ,
  document.querySelector('#container')
);
