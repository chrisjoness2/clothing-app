import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Footer from './components/footer';
import Cart from './components/cart';
import TopsPage from './components/tops/topsPage';
import Navbar from './components/navbar';
import DressesPage from './components/dresses/dressesPage';
import Top1 from './components/tops/top1pg';


function App() {
  return (
    <>
    
    <div className="App">
      <Navbar/>
      
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/tops" element={<TopsPage/>} />
        <Route path="/dresses" element={<DressesPage/>} />
        <Route path="/top1" element={<Top1/>} />
    </Routes>

    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
}

export default App;
