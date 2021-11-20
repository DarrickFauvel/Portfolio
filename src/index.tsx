import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SocialBar from './Components/SocialBar';

ReactDOM.render(
  <React.StrictMode>
    <SocialBar location="index" />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

