import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {HashRouter, Routes, Route} from 'react-router-dom'
import FemeiPage from './routes/FemeiPage.jsx';
import BarbatiPage from './routes/BarbatiPage';
import DropuriPage from './routes/DropuriPage';
import HainePage from './routes/HainePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route path='/femeipage' element={<FemeiPage />} />
      <Route path='/barbatipage' element={<BarbatiPage />} />
      <Route path='/dropuripage' element={< DropuriPage/>} />
      <Route path='/hainepage' element={<HainePage />} />
    </Routes>
  </HashRouter>
);


