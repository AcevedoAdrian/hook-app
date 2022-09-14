import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HookApp } from './HookApp';
import { CounterApp } from './components/CounterApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HookApp /> */}
    <CounterApp />
  </React.StrictMode>
)
