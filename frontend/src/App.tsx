import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserSection from './A_process/user';
import AuthSection from './A_process/auth';
import DevSection from './A_process/dev';
import MarketPlaceSection from './A_process/marketplace';
import Admin from './A_process/admin';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/dev/*' element={<DevSection />} />
          <Route path='/marketplace/*' element={<MarketPlaceSection />} />
          <Route path='/auth/*' element={<AuthSection />} />
          <Route path='/admin/*' element={<Admin />} />
          <Route path='/*' element={<UserSection />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
