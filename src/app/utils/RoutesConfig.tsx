import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Settings from '../../pages/Settings';

const RoutesConfig: React.FC  = () => {
return (         
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/settings' element={<Settings />} />
  </Routes>
);
}
export default RoutesConfig;