import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/homepage';
import './App.css'
import './index.css'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
    </Routes>
  );
}
 
export default App;