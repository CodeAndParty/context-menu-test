import React from 'react';
import ReactDOM from 'react-dom/client';

import CustomAntdProvider from '@features/antd/CustomAntdProvider.tsx';

import App from './App.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CustomAntdProvider>
      <App />
    </CustomAntdProvider>
  </React.StrictMode>
);
