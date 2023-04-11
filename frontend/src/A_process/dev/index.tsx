import { Routes, Route } from 'react-router-dom';
import { Docs } from './pages/docs/docs';
import { EnginePage } from './pages/engine/engine';
import { Settings } from './pages/settings/setings';
import { Projects } from './pages/projects/projects';

function DevSection() {
    return (
        <Routes>
            <Route path='' element={<Projects />} />
            <Route path='docs/*' element={<Docs />} />
            <Route path='engine/*' element={<EnginePage />} />
            <Route path='settings/*' element={<Settings />} />
        </Routes>
    );
}

export default DevSection;