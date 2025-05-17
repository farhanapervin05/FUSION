import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FusionGenerator from './pages/FusionGenerator';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fusion" element={<FusionGenerator />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
