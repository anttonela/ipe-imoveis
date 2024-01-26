import { createRoot } from 'react-dom/client';
import React from 'react';

import './assets/css/style.css';
import './assets/fonts/fonts.css';

import AppRoutes from './components/routes/Routes';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);

