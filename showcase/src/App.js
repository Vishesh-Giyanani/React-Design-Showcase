import './App.css';
import Navbar from './components/Navbar';
import {Router, Route, Routes}from 'react-router-dom';

function App() {
  return (
<>
  <Router>
    <Navbar />
      <Routes>
        <Route path='/' exact />
      </Routes>  
    </Router>
</>
  );
}

export default App;
