import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import BrowseProduct from './pages/browseProduct/BrowseProduct';
import Home from './pages/home/Home';
import ProductDetail from './pages/productDetail/ProductDetail';
import Bag from './pages/bag/Bag';
import CheckoutAddr from './pages/checkoutAddr/CheckoutAddr';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="mainPages">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/BrowseProduct' element={<BrowseProduct />} />
          <Route path='/ProductDetail' element={<ProductDetail />} />
          <Route path='/Bag' element={<Bag />} />
          <Route path='/CheckoutAddr' element={<CheckoutAddr />} />


        </Routes>

      </div>
    </div>
  );
}

export default App;
