import React from 'react';
import './home.scss';
import men1 from './img/men1.png'
import women1 from './img/women1.png'
import girl1 from './img/girl1.png'
import boy1 from './img/boy1.png'
import pop1 from './img/pop1.jpg' 
import pop2 from './img/pop2.jpg' 
import vid from './video/vid.mp4'
import Slider from '../../Components/slider/Slider';
// import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {


  return (
    <div className='home'>
      <Slider />

{/* catg  */}
      <div className="catg">
        <h2>Category</h2>
        <ul>
          <li><Link to='/BrowseProduct/men'><img src={men1} alt="" /> <div id="content">Mens</div></Link></li>
          <li><Link to='/BrowseProduct/women'><img src={women1} alt="" /><div id="content">Womens</div></Link></li>
          <li><Link to='/BrowseProduct/girl'><img src={girl1} alt="" /><div id="content">Girl</div></Link></li>
          <li><Link to='/BrowseProduct/boy'><img src={boy1} alt="" /><div id="content">Boy</div></Link></li>
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
    <li><h3>'More -{'>'}'</h3></li>
  </ul>
</div>









    </div>
  )
}
