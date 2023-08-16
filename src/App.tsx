import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Footer from './components/layout/Footer';
import Fashion from './pages/Fashion';
import Accessory from './pages/Accessory';
import Digital from './pages/Digital';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster containerStyle={{ fontSize: "1rem" }} position="top-center" reverseOrder={false} />
      <Header />
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/accessory" element={<Accessory />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
