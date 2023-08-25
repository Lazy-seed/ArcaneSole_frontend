import React, { useEffect, useState } from 'react'
import './browseProduct.scss';
import { Link, useParams } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader'
import axios from "axios";



export default function BrowseProduct() {

  const { ctg } = useParams();
  

  // console.log(ctg);
  const BASE_URL = 'http://localhost:8000';

  const [catg, setcatg] = useState(ctg);
  const [IsLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true)
    axios.get(`${BASE_URL}/api/allProducts/${catg}`, { withCredentials: true })
      .then((res) => {
        setData(res.data.products);
        console.log(res.data);
        setIsLoading(false)
      });
    console.log(catg);

  }, [catg])









  
  const [Data, setData] = useState('')

  // if (Data === '') {
  //   return null;
  // }

  return (
    <div className='browseProduct'>

      {/* filter */}
      <div className="left">

        {/* catgeory */}

        <ul className='catg'>
          <Link to='/BrowseProduct/all'><li onClick={()=>{setcatg('all'); ;}} className={catg==='all'?'active':''}>All</li></Link>
          <Link to='/BrowseProduct/men'><li onClick={()=>{setcatg('men'); ;}} className={catg==='men'?'active':''}>Mens</li></Link>
          <Link to='/BrowseProduct/women'><li onClick={()=>{setcatg('women'); ;}} className={catg==='women'?'active':''}>Womens</li></Link>
          <Link to='/BrowseProduct/girl'><li onClick={()=>{setcatg('girl'); ;}} className={catg==='girl'?'active':''}>Girls</li></Link>
          <Link to='/BrowseProduct/boy'><li onClick={()=>{setcatg('boy'); ;}} className={catg==='boy'?'active':''}>Boys</li></Link>
        </ul>



        {/* sort by */}
        <div className="sort">
          <h3>Sort By</h3>
          <select name="sort" id="sort">
            <option value="popular">Popular</option>
            <option value="price">Price i</option>
            <option value="price">Price</option>
            <option value="price">Price</option>
          </select>
        </div>


      </div>


      <div className="right">

        <ul>
        

{IsLoading && <Loader/> }
          {Data && Data.map((item, index) => {


            return (
              <li key={index}>
                <div id="img"><img src={item.img1} alt="" /></div>
                <div id="info">
                  <h3>{item.name}</h3>
                  <h2>₹ {item.price}</h2>
                </div>
                <Link to={`/ProductDetail/${item._id}`} id="view">View</Link>
              </li>
            )
          })}







        </ul>


      </div>


    </div>
  )


  function as(params) {
    console.log("asdd");
  }
}
