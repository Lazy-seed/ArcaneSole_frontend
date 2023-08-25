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
import Page_not_found from './pages/page_not_found/Page_not_found';
import Successful from './pages/successful/Successful';
import { useState } from 'react';

function App() {
  const [isLogin, setisLogin] = useState(false)

  console.log(isLogin);

  return (
    <div className="App">
      <Navbar setisLogin={setisLogin} />

      <div className="mainPages">

        <Routes>
          <Route path='/test' exact={true} element={<Test />} />
          <Route path='/' exact={true} element={<Home />} />
          <Route path='/BrowseProduct/:ctg' exact={true} element={<BrowseProduct />} />
          <Route path='/ProductDetail/:id' exact={true} element={<ProductDetail isLogin={isLogin} />} />


          
          {isLogin && <>

            <Route path='/Bag' exact={true} element={<Bag />} />
            <Route path='/CheckoutAddr' exact={true} element={<CheckoutAddr />} />
            <Route path='/Profile' exact={true} element={<Profile />} >
              <Route path='/Profile/edit' exact={true} element={<ProfileEdit />} />
              <Route path='/Profile/order' exact={true} element={<OrderProduct />} />
            </Route>

            <Route path='/orderSuccess' exact={true} element={<Successful />} />

          </>}



          <Route path='*' exact={true} element={<Page_not_found />} />

        </Routes>

      </div>
    </div>
  );
}

export default App;
