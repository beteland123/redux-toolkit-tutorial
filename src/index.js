import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './store';
import { Provider } from 'react';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <provider store={store}>
       <App />
    </provider>
   
  </React.StrictMode>
);
