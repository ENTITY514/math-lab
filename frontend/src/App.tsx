import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { SideBar } from './Components/SideBar/sidebar';
import { Articles } from './Pages/articles/articles';
import { Auth } from './Pages/auth/auth';
import { Docs } from './Pages/docs/docs';
import { EnginePage } from './Pages/engine/engine';
import { Main } from './Pages/main/main';
import { Settings } from './Pages/settings/setings';
import { WorkView } from './Pages/work_view/work_view';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SideBar />
        <Routes>
          <Route path='' element={<Main />} />
          <Route path='/workview/*' element={<WorkView />} />
          <Route path='/docs/*' element={<Docs />} />
          <Route path='/articles/*' element={<Articles />} />
          <Route path='/engine/*' element={<EnginePage />} />
          <Route path='/settings/*' element={<Settings />} />
          <Route path='/auth/*' element={<Auth />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
