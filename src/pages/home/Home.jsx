import React from 'react';
import './home.scss';
import men from './img/men.png'
import pop1 from './img/pop1.jpg' 
import pop2 from './img/pop2.jpg' 
import vid from './video/vid.mp4'
import Slider from '../../Components/Navbar/slider/Slider';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {


  return (
    <div className='home'>
      <Slider />

{/* catg  */}
      <div className="catg">
        <h2>Category</h2>
        <ul>
          <li><Link to='/BrowseProduct'><img src={men} alt="" /> <div id="content">Mens</div></Link></li>
          <li><Link to='/BrowseProduct'><img src={men} alt="" /><div id="content">Womens</div></Link></li>
          <li><Link to='/BrowseProduct'><img src={men} alt="" /><div id="content">Girl</div></Link></li>
          <li><Link to='/BrowseProduct'><img src={men} alt="" /><div id="content">Boy</div></Link></li>
        </ul>
      </div>

{/* video  */}
      <div className="video_player">
        <video  muted>
          <source src={vid} type="video/mp4" />
        </video>
      </div>



{/* popular */}

<div className="popular">
  <h2>Popular</h2>
  <ul>
    <li><img src={pop1} alt="" /></li>
    <li><img src={pop2} alt="" /></li>
    <li><h3>'More ->'</h3></li>
  </ul>
</div>









    </div>
  )
}
