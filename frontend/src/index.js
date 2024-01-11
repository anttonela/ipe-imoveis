import ReactDOM from 'react-dom';
import React from 'react';

import './assets/css/style.css';
import './assets/fonts/fonts.css';

import AppRoutes from './components/routes/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
