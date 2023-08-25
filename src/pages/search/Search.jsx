import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import './search.scss';
import Loader from '../../Components/Loader/Loader'
import { RiSearchLine } from "react-icons/ri";


export default function Search() {

  const BASE_URL = 'http://localhost:8000';


  useEffect(() => {

    setisLoading(true)
    axios.get(`${BASE_URL}/api/SearchShoe/jordan`, { withCredentials: true })
      .then((res) => {
        setData(res.data.result);
        console.log(res.data.result);
        setisLoading(false)
      });
    window.scrollTo(0, 0);

  }, [])
  const [Data, setData] = useState('')

  const [isLoading, setisLoading] = useState(false);


  return (
    <div className='search'>
      <div className="top">
        <input type="text" id='input_value' placeholder={`jordan...`} /><button onClick={srch_btn}><RiSearchLine id='icon' /></button>
      </div>


      <div className="result">


        <ul>


          {Data === '' && <>No Data found</>}
          {isLoading && <Loader />}

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

  function srch_btn() {
    const input_value = document.getElementById("input_value").value;
    setisLoading(true)
    axios.get(`${BASE_URL}/api/SearchShoe/${input_value}`, { withCredentials: true })
      .then((res) => {
        setData(res.data.result);
        console.log(res.data.result);
        setisLoading(false)

      });

  }
}
