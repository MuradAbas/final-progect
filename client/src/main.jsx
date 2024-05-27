import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css';
import { BrowserRouter, Routes, Router } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<App />
</BrowserRouter>
)