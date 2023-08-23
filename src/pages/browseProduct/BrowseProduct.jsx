import React, { useEffect, useState } from 'react'
import './browseProduct.scss';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";



export default function BrowseProduct() {

  const {ctg}= useParams();
  // console.log(ctg);
  const BASE_URL = 'http://localhost:8000';

  const [catg, setcatg] = useState(ctg)
  useEffect(() => {
    const result = axios.get(`${BASE_URL}/api/allProducts/${catg}`, { withCredentials: true })
      .then((res) => {
        setData(res.data.products);
        console.log(res.data);
      });
    console.log(catg);

  }, [catg])


  const [Data, setData] = useState('')

  // if (Data == '') {
  //   return null;
  // }

  return (
    <div className='browseProduct'>

      {/* filter */}
      <div className="left">


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

        {/* catgeory */}
        <div className="catg">
          <h2>Category</h2>
          <ul>
            <li>
              <label htmlFor="all">All</label>
              <input id="all" type="radio" name='catg' />
            </li>
            <li>
              <label htmlFor="mens">Mens</label>
              <input id="mens" type="radio" name='catg' onClick={() => setcatg('men')} />
            </li>
            <li>
              <label htmlFor="womens">Womens</label>
              <input id="womens" type="radio" name='catg' onClick={() => setcatg('women')} />
            </li>
            <li>
              <label htmlFor="girls">Girls</label>
              <input id="girls" type="radio" name='catg' onClick={() => setcatg('girl')} />
            </li>
            <li>
              <label htmlFor="boys">Boys</label>
              <input id="boys" type="radio" name='catg' onClick={() => setcatg('boy')} />
            </li>

          </ul>
        </div>


        {/* price */}
        {/* <div className="catg">
          <h2>Price Range</h2>
          <ul onChange={as}>
            <li>
              <label htmlFor="pr1">All</label>
              <input id="pr1" name='price' type="radio" />
            </li>
            <li>
              <label htmlFor="pr1">0 - 1999</label>
              <input id="pr1" name='price' type="radio" />
            </li>
            <li>
              <label htmlFor="pr2">2000 - 4999</label>
              <input id="pr2" name='price' type="radio" />
            </li>
            <li>
              <label htmlFor="pr3">5000 - 9999</label>
              <input id="pr3" name='price' type="radio" />
            </li>
            <li>
              <label htmlFor="pr4">10000+ </label>
              <input id="pr4" name='price' type="radio" />
            </li>
          </ul>
        </div> */}




      </div>


      <div className="right">

        <ul>



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
