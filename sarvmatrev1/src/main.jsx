import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { AppProvider } from './Context/CarrerPage/CareerPageContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AppProvider>

    <App />
  </AppProvider>
  </React.StrictMode>,
)
