import React, { useState } from 'react'
import './checkoutAddr.scss';
import { Link } from 'react-router-dom';

export default function CheckoutAddr() {
    const state_data = ["Maharashtra", "Gujrat", "Uttar Pradesh"];
    // const city_data = [["Mumbai", "Thane", "Pune"], ["Surat", "Ahmedabad"], ["Lucknow", "Kanpur", "Meerut"]];
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


    return (
        <div className='checkoutAddr'>

            <div className='container'>
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
                <Link to='/payment' >Deliver here</Link>
            </div>
        </div>
    )
}
