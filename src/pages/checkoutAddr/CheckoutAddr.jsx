import React from 'react'
import './checkoutAddr.scss';
import { Link } from 'react-router-dom';

export default function CheckoutAddr() {
    return (
        <div className='checkoutAddr'>

            <div className='container'>
                <h2>Delivery Address</h2>
                <div className="textbox1">
                    <div className="label1">House No/Building</div>
                    <input type="text" />
                    <div className="label1">Street/Area</div>
                    <input type="text" />
                </div>
                <div id="drop-d">
                    <label for="City" >City
                        <select name="City">
                            <option value="DL">Delhi</option>
                            <option value="GA">Goa</option>
                            <option value="MH">Maharashtra</option>
                            <option value="GJ">Gujarat</option>
                        </select></label>
                    <label for="state" >State
                        <select name="state">
                            <option value="MU">Mumbai</option>
                            <option value="PU">Pune</option>
                            <option value="RA">Ratnagari</option>
                        </select></label>
                </div>
                <div className="text2">

                    <div className="label3">Pincode/Zipcode</div>
                    <input type="text" />

                </div>
                <Link to='/payment' >Deliver here</Link>
            </div>
        </div>
    )
}
