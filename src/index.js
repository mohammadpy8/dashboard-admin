import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "./FliterProduct/App.css";


const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)



