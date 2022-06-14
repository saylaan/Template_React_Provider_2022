import React from 'react';
import ReactDOM from 'react-dom';

/* ------------- || Components Imports || ------------- */
import App from './app/App';

/* ------------- || Styles Imports || ------------- */
import './app/styles/globals.css';
import 'antd/dist/antd.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);