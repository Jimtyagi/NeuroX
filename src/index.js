import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/fonts/Lufga-Regular.otf';
import './assets/fonts/PlayfairDisplay-Regular.ttf';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import Routes from './Routes';

ReactDOM.render(
  <Router>
        <div className="App">
            <Routes />
        </div>
    </Router>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
