import { Button, Carousel, ConfigProvider, Layout, Space } from 'antd';

import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ANT_THEME } from './theme/antd';
import ruRU from 'antd/locale/ru_RU';
import './App.css';
import './theme/theme.css';
import './theme/bootstrap.css';
import './theme/animate.css';
import './fonts/index.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
]);

function App() {
  return <ConfigProvider theme={ANT_THEME} locale={ruRU}></ConfigProvider>;
}

export default App;
