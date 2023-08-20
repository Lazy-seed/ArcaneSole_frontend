import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import BrowseProduct from './pages/browseProduct/BrowseProduct';
import Home from './pages/home/Home';
import ProductDetail from './pages/productDetail/ProductDetail';
import Bag from './pages/bag/Bag';
import CheckoutAddr from './pages/checkoutAddr/CheckoutAddr';
import Profile from './pages/profile/Profile';
import OrderProduct from './Components/orderProduct/OrderProduct';
import ProfileEdit from './Components/profileEdit/ProfileEdit';
import Test from './Admin/Test';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="mainPages">

        <Routes>
          <Route path='/test' element={<Test />} />
          <Route path='/' element={<Home />} />
          <Route path='/BrowseProduct' element={<BrowseProduct />} />
          <Route path='/ProductDetail/:id' element={<ProductDetail />} />
          <Route path='/Bag' element={<Bag />} />
          <Route path='/CheckoutAddr' element={<CheckoutAddr />} />

          
          <Route path='/Profile' element={<Profile />} >
            <Route path='/Profile/edit' element={<ProfileEdit/>} />
            <Route path='/Profile/order' element={<OrderProduct/>} />
          </Route>


        </Routes>

      </div>
    </div>
  );
}

export default App;
