import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/homepage';
import './App.css'
import './index.css'
import Bd from './components/home/bluedown';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/result" element={<Bd />} />
    </Routes>
  );
}
 
export default App;