import React, {  useState } from 'react'
import axios from "axios";
import './checkoutAddr.scss';
import { useNavigate } from "react-router-dom";
import logo from './logo.png';
import Alert from '../../Components/Alert/Alert';

export default function CheckoutAddr() {
const navigate=useNavigate();
    const BASE_URL = 'http://localhost:8000';

    // state----------------------------------------------------------
    const state_data = ["Maharashtra", "Gujrat", "Uttar Pradesh"];
    let city_data = '';
    const [State, setState] = useState('Maharashtra');
    if (State === 'Uttar Pradesh') {
        city_data = ["Lucknow", "Kanpur", "Meerut"];
    }
    else if (State === "Gujrat") {
        city_data = ["Surat", "Ahmedabad"]
    }
    else {
        city_data = ["Mumbai", "Thane", "Pune"]
    }



  // payment---------------------------------------------------------------------------
  function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => { resolve(true); };
        script.onerror = () => { resolve(false); };
        document.body.appendChild(script);
    });
}

async function displayRazorpay() {
    document.getElementById("deliver-btn").innerText = "Loading...";
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }




    // amount upadte
    const amt = { amt: TotalPrice + DeliveryPrice }
    // creating a new order
    const result = await axios.post(`${BASE_URL}/payment/orders`, amt, { withCredentials: true });

    if (!result) {
        alert("Server error. Are you online?");
        return;
    }

    // Getting the order details back
    const { amount, id: order_id, currency } = result.data;


    const options = {
        key: "rzp_test_VriOzbggcgpNkd", // Enter the Key ID generated from the Dashboard
        amount: amount.toString(),
        currency: currency,
        name: "ArcaneSole",
        description: "Test Transaction",
        image: logo,
        order_id: order_id,
        handler: async function (response) {
            const data = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };

            const result = await axios.post(`${BASE_URL}/payment/success`, data);

            // alert(result.data.msg);
            if (result.data.msg ==='success') {
                await makeOrder();

                navigate("/orderSuccess");
            }
        },
        notes: {
            address: "Soumya Dey Corporate Office",
        },
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    document.getElementById("deliver-btn").innerText = "Deliver here";


}
  // xxxxxx---------------------------------------------------------------------------

// const --------------------------------------
    let TotalPrice = 0;
    let DeliveryPrice = 495;
    const [Err_tit, setErr_tit] = useState('');
    const [Err_msg, setErr_msg] = useState('');
    const [ShowAlert, setShowAlert] = useState(false);



    setTimeout(() => {
        setShowAlert(false)
    }, 5000);




    return (
        <div className='checkoutAddr'>
            <div className='container'>
            {ShowAlert && <Alert Err_tit={Err_tit} Err_msg={Err_msg} setShowAlert={setShowAlert} />}
                <h2>Delivery Address</h2>
                <div className="textbox1">
                    <div className="label1">House No/Building</div>
                    <input type="text" id='house'/>
                    <div className="label1" id='area'>Street/Area</div>
                    <input type="text" />
                </div>
                <div id="drop-d">

                    <label htmlFor="state" >State
                        <select name="state" id='state' onChange={(e) => { setState(e.target.value) }} defaultValue={State} >
                            {state_data && state_data.map((state, index) => {
                                return (
                                    <option value={state} key={index}>{state}</option>
                                )
                            })}

                        </select></label>

                    <label htmlFor="City" >City
                        <select name="City" id='city' >
                            {city_data && city_data.map((city,index) => {
                                return (
                                    <option value={city} key={index}>{city}</option>
                                )
                            })}

                        </select></label>
                </div>
                <div className="text2">

                    <div className="label3">Pincode/Zipcode</div>
                    <input type="text" id='pincode' />

                </div>
                <button onClick={valid} id='deliver-btn'>Deliver here</button>
            </div>
        </div>
    );

    // setErr_tit("Deleted");
    // setErr_msg("Item has been deleted");
    // setShowAlert(true);


    function valid(){
        var house = document.getElementById("house").value;
        var area = document.getElementById("area").value;
        var state = document.getElementById("state").value;
        var city = document.getElementById("city").value;
        var pincode = document.getElementById("pincode").value;

        if (house.trim()==='') {
            setErr_tit("Error")
            setErr_msg("fill all fields")
            setShowAlert(true)
            return
        }
        // payment calll
        displayRazorpay()

    }

    function makeOrder() {
      
        var house = document.getElementById("house").value;
        var area = document.getElementById("area").value;
        var state = document.getElementById("state").value;
        var city = document.getElementById("city").value;
        var pincode = document.getElementById("pincode").value;



        const address={house,area,state,city,pincode}

        axios.post(`${BASE_URL}/api/newOrder`,address,{withCredentials:true}).then((res)=>{
            console.log(res.data);
        })
        
    }
}
