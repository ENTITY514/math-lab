import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './Section/admin';
import AuthSection from './Section/auth';
import DevSection from './Section/dev';
import MarketPlaceSection from './Section/marketplace';
import UserSection from './Section/user';

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
