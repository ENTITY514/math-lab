import { Routes, Route } from 'react-router-dom';
import { Docs } from './pages/docs/docs';
import { EnginePage } from './pages/engine/engine';
import { Settings } from './pages/settings/setings';

function DevSection() {
    return (
        <Routes>
            <Route path='docs/*' element={<Docs />} />
            <Route path='engine/*' element={<EnginePage />} />
            <Route path='settings/*' element={<Settings />} />
        </Routes>
    );
}

export default DevSection;