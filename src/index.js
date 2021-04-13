import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import AuthState from "./context/AuthContext";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
  <Router>
  <AuthState>
  <App />
  </AuthState>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
