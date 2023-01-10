import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Articles } from './Pages/articles/articles';
import { Docs } from './Pages/docs/docs';
import { Main } from './Pages/main/main';
import { WorkView } from './Pages/work_view/work_view';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='' element={<Main />} />
          <Route path='/workview' element={<WorkView />} />
          <Route path='/docs' element={<Docs />} />
          <Route path='/articles' element={<Articles />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
