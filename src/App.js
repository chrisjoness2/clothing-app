import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Cart from './components/cart';
import Dresses from './components/dresses';
import Tops from './components/tops';
import Navbar from './components/navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
    
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tops" element={<Tops/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/dresses" element={<Dresses/>} />
      </Routes>
    </div>
  );
}

export default App;
