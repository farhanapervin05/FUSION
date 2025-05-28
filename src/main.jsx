import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import FusionGenerator from './pages/FusionGenerator'
import About from './pages/About'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/FUSION/fusion">
      <Routes>
        <Route path="*" element={<App />}>
          <Route index element={<Home />} />
          <Route path="fusion" element={<FusionGenerator />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
