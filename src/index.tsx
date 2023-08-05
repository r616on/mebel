import React from 'react';
import ReactDOM from 'react-dom/client';
import ruRU from 'antd/locale/ru_RU';
import './index.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { ANT_THEME } from './theme/antd';
import Title from './Pages/Title';

import './App.css';
import './theme/theme.css';
import './theme/bootstrap.css';
import './theme/animate.css';
import './fonts/index.js';
// import './theme/slick.css';
// import './theme/slick-theme.css';
import Develop from './Pages/Develop';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={ANT_THEME} locale={ruRU}>
      <Router>
        <Routes>
          <Route path="/" element={<Title />} />
          <Route path="/dev" element={<Develop />} />
        </Routes>
      </Router>
    </ConfigProvider>
  </React.StrictMode>
);
