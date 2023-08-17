import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import BrowseProduct from './pages/browseProduct/BrowseProduct';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="mainPages">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/BrowseProduct' element={<BrowseProduct />} />


        </Routes>

      </div>
    </div>
  );
}

export default App;
