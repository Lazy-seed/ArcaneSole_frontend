import React, { useEffect, useState } from 'react'
import './productDetail.scss';
import axios from "axios";


import { HiHeart} from "react-icons/hi";
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
    const {id} =useParams();
    const BASE_URL = 'http://localhost:8000';

    useEffect(() => {
        const result = axios.get(`${BASE_URL}/api/singleShoe/${id}`, { withCredentials: true })
          .then((res) => {
            setData(res.data.data);
            console.log(res.data.data);
            setimg(res.data.data.img1)
          });
    
      }, [])

  const [Data, setData] = useState('')
  const [img, setimg] = useState('')

  if (Data=='') {
    return null;
  }
    return (
        <div className='productDetail'>

            <div className="top">

                {/* img */}
                <div className="left">
                    <div className="mini_Img">
                        <ul>
                            <li><img src={Data.img1} alt=""  onMouseEnter={()=>setimg(Data.img1)}/></li>
                            <li><img src={Data.img2} alt=""  onMouseEnter={()=>setimg(Data.img2)}/></li>
                            <li><img src={Data.img3} alt=""  onMouseEnter={()=>setimg(Data.img3)}/></li>
                            <li><img src={Data.img4} alt=""  onMouseEnter={()=>setimg(Data.img4)}/></li>
                        </ul>
                    </div>
                    <div className="lar_Img">
                        <img src={img} alt=""  />
                    </div>
                </div>



                <div className="right">

                    <div id="info">
                        <h1>{Data.name}</h1>
                        <h3>Women's Premium Walking Shoes</h3>
                        <h2>MRP : ₹ {Data.price}</h2>
                        <p>incl. of taxes</p>
                        <p>(Also includes all applicable duties)</p>
                    </div>

                    <div id="size">
                        <h2>Select Size</h2>
                        <ul>
                            <li>UK 3.5</li>
                            <li>UK 3.5</li>
                            <li>UK 3.5</li>
                            <li>UK 3.5</li>
                            <li>UK 3.5</li>
                            <li>UK 3.5</li>
                        </ul>
                    </div>


                    <div id="btns">
                        <button >Add to Bag </button>
                        <button>Wistlist <HiHeart/></button>
                    </div>

                </div>
            </div>

        </div>
    )
}
