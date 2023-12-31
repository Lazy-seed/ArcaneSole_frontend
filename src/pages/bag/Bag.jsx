import React, { useEffect, useState } from 'react'
import axios from "axios";
import './bag.scss';
import {Link} from 'react-router-dom'
import { CgTrash } from 'react-icons/cg'
import empty from './empty.png';
import Alert from '../../Components/Alert/Alert';
import Loader from '../../Components/Loader/Loader';

export default function Bag() {
    const BASE_URL = 'http://localhost:8000';

    useEffect(() => {
        const result = axios.get(`${BASE_URL}/api/getBag`, { withCredentials: true })
            .then((res) => {
                setData(res.data.bagItems);
                console.log(res.data);
            });

    }, [])

  



    // const 

    const [Data, setData] = useState('')
    let TotalPrice = 0;
    let DeliveryPrice = 495;
    const [Err_tit, setErr_tit] = useState('');
    const [Err_msg, setErr_msg] = useState('');
    const [ShowAlert, setShowAlert] = useState(false);



    setTimeout(() => {
        setShowAlert(false)
    }, 5000);


    if (Data === '') {
        return <Loader />;
    }
    if (Data.toString() ==='') {
        // return <img src={empty} className='empty_img'/>
        
    }

    console.log(Data);

    return (
        <div className='bag'>
            {
                ShowAlert && <Alert Err_tit={Err_tit} Err_msg={Err_msg} setShowAlert={setShowAlert} />
            }

            {/* left */}
            <div className="left">
                <h2>Bag</h2>
                <ul>

                    {Data && Data.map((item, index) => {
                        TotalPrice += item.price * item.qty;
                        return (
                            <li key={index}>
                                <div id="img"><img src={item.img1} alt="" /></div>
                                <div id="info">
                                    <h1>{item.name}</h1>
                                    <h3>Women's Shoes</h3>
                                    <h3>White</h3>

                                    <div id="drop-d">
                                        <label htmlFor="size" id='size'>Size
                                            <select name="size" id="size_v" defaultValue={item.size} onChange={(e) => { updBagSize(item._id, e.target.value); }}>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                            </select></label>
                                        <label htmlFor="qty" id='qty'>Quantity
                                            <select name="qty" id="qty_v" defaultValue={item.qty} onChange={(e) => updBagQty(item._id, e.target.value)}>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select></label>
                                    </div>
                                </div>
                                <div id="del">
                                    <CgTrash id='icon' onClick={() => delBag(item._id)} />
                                    <h3>MRP: ₹ {item.price * item.qty}</h3>
                                </div>
                            </li>
                        )
                    })

                    }


                </ul>


            </div>

            {/* Right */}
            <div className="right">

                <h2>Summary</h2>
                <div id="bill">
                    <ul>
                        <li><h3>Subtotal</h3><h3>₹ {TotalPrice}</h3></li>
                        <li><h3>Estimated Delivery & Handling</h3><h3>₹ {DeliveryPrice}</h3></li>
                        <hr />
                        <li><h3>Total</h3><h3>₹ {TotalPrice + DeliveryPrice}</h3></li>
                        <hr />

                    </ul>

                    <Link to='./CheckoutAddr' id='checkOut-btn'>Checkout</Link>
                </div>

            </div>
        </div>
    );



    function delBag(id) {

        axios.get(`${BASE_URL}/api/delBag/${id}`, { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                setErr_tit("Deleted");
                setErr_msg("Item has been deleted");
                setShowAlert(true);

                axios.get(`${BASE_URL}/api/getBag`, { withCredentials: true })
                    .then((res) => {
                        setData(res.data.bagItems);
                        console.log(res.data);
                    });

            });
    }


    function updBagSize(id, size) {
        // const size = document.getElementById("size_v").value;
        // const qty = document.getElementById("qty_v").value;


        const data = {
            pID: id,
            size: size
        }


        axios.post(`${BASE_URL}/api/uptBag/`, data, { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                setErr_tit("Updated");
                setErr_msg("Item has been updated");
                setShowAlert(true);

                axios.get(`${BASE_URL}/api/getBag`, { withCredentials: true })
                    .then((res) => {
                        setData(res.data.bagItems);
                        console.log(res.data);
                    });

            });

    }
    function updBagQty(id, qty) {
        // const size = document.getElementById("size_v").value;
        // const qty = document.getElementById("qty_v").value;


        const data = {
            pID: id,
            qty: qty
        }

        console.log(data);

        // return null
        axios.post(`${BASE_URL}/api/uptBag/`, data, { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                setErr_tit("Updated");
                setErr_msg("Item has been updated");
                setShowAlert(true);

                axios.get(`${BASE_URL}/api/getBag`, { withCredentials: true })
                    .then((res) => {
                        setData(res.data.bagItems);
                        console.log(res.data);
                    });

            });

    }
}
