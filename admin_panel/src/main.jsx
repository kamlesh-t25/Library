import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './App';
import './index.css';
import StoreContextProvider from './Components/Context/StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root

root.render(
  <StoreContextProvider>
    <App/>
  </StoreContextProvider>
);
