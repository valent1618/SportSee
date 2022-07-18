import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'normalize.css';
import './styles/main.scss';

import comingSoonPages from './data/comingSoonPages';

import { HorizontalHeader, VerticalHeader } from './layouts/Header';

import Dashboard from './pages/Dashboard';
import ComingSoon from './pages/ComingSoon';
import Error from './pages/404';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <HorizontalHeader />
      <div className='flex'>
        <VerticalHeader />
        <Routes>
          <Route exact path='/SportSee/profile' element={<Dashboard />} />
          {comingSoonPages.map((page) => (
            <Route
              path={`/SportSee${page.path}`}
              element={<ComingSoon page={page.name} />}
              key={`Page-${page.name}`}
            />
          ))}
          <Route path='/SportSee/*' element={<Error />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
