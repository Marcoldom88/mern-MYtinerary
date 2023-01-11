import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import BrowseCities from './components/BrowseCities';
import LandingPage from './components/LandingPage';


function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path='/BrowseCities' element={<BrowseCities />} />
        </Routes>
      </div>
    </Router>
 );
}

export default App;
