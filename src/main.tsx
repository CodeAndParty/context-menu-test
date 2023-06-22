import React from 'react';
import ReactDOM from 'react-dom/client';

import { ConfigProvider } from 'antd';
import heIL from 'antd/locale/he_IL';

import App from './App.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider locale={heIL} direction="rtl">
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
