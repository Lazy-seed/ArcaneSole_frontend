import React, { useEffect, useState } from 'react'
import './productDetail.scss';
import axios from "axios";


import { HiHeart } from "react-icons/hi";
import { useParams } from 'react-router-dom';
import Alert from '../../Components/Alert/Alert';
import Loader from '../../Components/Loader/Loader';

export default function ProductDetail({ isLogin }) {
    const { id } = useParams();
    const BASE_URL = 'http://localhost:8000';
    useEffect(() => {
        axios.get(`${BASE_URL}/api/singleShoe/${id}`, { withCredentials: true })
            .then((res) => {
                setData(res.data.data);
                console.log(res.data.data);
                setimg(res.data.data.img1)
                if (res.data.data.category === "girl") {
                    setSize_Len([2,3,4,5]);
                    setcatg_desc("Girl`s")
                }
                if (res.data.data.category ==="boy") {
                    setSize_Len([3,4,5,6])
                    setcatg_desc("Boy`s")
                }
                if (res.data.data.category ==="women") {
                    setSize_Len([4,5,6,7,8,9])
                    setcatg_desc("Women`s")
                }
                if (res.data.data.category ==="men")  {
                    setSize_Len([6,7,8,9,10,11])
                    setcatg_desc("Men`s")
                }
            });

    }, [])

    const [Size_Len, setSize_Len] = useState()
    const [catg_desc, setcatg_desc] = useState()
    const [ShowAlert, setShowAlert] = useState(false)
    const [Data, setData] = useState('')
    const [img, setimg] = useState('')
    const [Size, setSize] = useState(0)
    const [Err_tit, setErr_tit] = useState('');
    const [Err_msg, setErr_msg] = useState('');

    setTimeout(() => {
        setShowAlert(false)
    }, 5000);

    if (Data == '') {
        return <Loader />;
    }

    console.log(Size_Len);
    return (
        <div className='productDetail'>
            {ShowAlert &&
                <Alert Err_tit={Err_tit} Err_msg={Err_msg} setShowAlert={setShowAlert} />
            }
            <div className="top">

                {/* img */}
                <div className="left">
                    <div className="mini_Img">
                        <ul>
                            <li><img src={Data.img1} alt="" onMouseEnter={() => setimg(Data.img1)} /></li>
                            <li><img src={Data.img2} alt="" onMouseEnter={() => setimg(Data.img2)} /></li>
                            <li><img src={Data.img3} alt="" onMouseEnter={() => setimg(Data.img3)} /></li>
                            <li><img src={Data.img4} alt="" onMouseEnter={() => setimg(Data.img4)} /></li>
                        </ul>
                    </div>
                    <div className="lar_Img">
                        <img src={img} alt="" />
                    </div>
                </div>



                <div className="right">

                    <div id="info">
                        <h1>{Data.name}</h1>
                        <h3>{catg_desc} Premium Walking Shoes</h3>
                        <h2>MRP : ₹ {Data.price}</h2>
                        <p>incl. of taxes</p>
                        <p>(Also includes all applicable duties)</p>
                    </div>

                    <div id="size">
                        <h2>Select Size</h2>
                        <ul>

                            {Size_Len && Size_Len.map((size_no,index)=>{
                                return(
                                    <li key={index} className={Size === size_no ? 'active' : ''} onClick={() => setSize(size_no)}>{size_no}</li>
                                )
                            })}
                            {/* <li className={Size === 7 ? 'active' : ''} onClick={() => setSize(7)}>7</li>
                            <li className={Size === 8 ? 'active' : ''} onClick={() => setSize(8)}>8</li>
                            <li className={Size === 9 ? 'active' : ''} onClick={() => setSize(9)}>9</li>
                            <li className={Size === 10 ? 'active' : ''} onClick={() => setSize(10)}>10</li>
                            <li className={Size === 11 ? 'active' : ''} onClick={() => setSize(11)}>11</li> */}
                        </ul>
                    </div>


                    <div id="btns">
                        <button onClick={addBag} >Add to Bag </button>
                        <button>Wistlist <HiHeart /></button>
                    </div>

                </div>
            </div>

        </div>
    );




    function addBag() {

        if (!isLogin) {
            setShowAlert(true);
            setErr_tit("Login");
            setErr_msg("Please login to add shoe in cart");
            return
        }


        if (Size === 0) {
            setShowAlert(true);
            setErr_tit("Error");
            setErr_msg("Please select Size");
            return
        }

        const data = {
            shoe_id: Data._id,
            name: Data.name,
            img1: Data.img1,
            qty: 1,
            size: Size,
            price: Data.price
        }

        axios.post(`${BASE_URL}/api/addBag`, data, { withCredentials: true })
            .then((res) => {
                console.log(res.data);
            });
            setShowAlert(true);
            setErr_tit("Added");
            setErr_msg("Shoe is Added in BAG");
    }


}
