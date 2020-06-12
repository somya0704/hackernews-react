import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorker.register();
