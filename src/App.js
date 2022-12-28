import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
        <div className='app'>
          <LandingPage />
          <Routes>
            <Route index element={""} />
            <Route path='' element={""} />
          </Routes>
        </div>
    </Router>
 );
}

export default App;
