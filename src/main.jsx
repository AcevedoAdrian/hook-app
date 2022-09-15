import React from 'react';
import ReactDOM from 'react-dom/client';

// import { HookApp } from './HookApp';
// import { CounterApp } from './components/CounterApp';
// import { CounterWithCustomeHook } from './useState/CounterWithCustomeHook';
import { SimpleForm } from './useEffect/SimpleForm';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HookApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomeHook /> */}
    <SimpleForm />
  </React.StrictMode>
)
