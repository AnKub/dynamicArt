import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Navbar from './components/Navbar';
import Home from './pages/home';
import Content from './components/Content';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/' element={<Navbar />}> 
            <Route path='content/:contentId' element={<Content />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
