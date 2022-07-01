import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import storage from './storing/storage';
import '../node_modules/bulma/css/bulma.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import {Provider} from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storage}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);