import React from 'react';
import './bag.scss';
import { CgTrash } from 'react-icons/cg'
import { Link } from 'react-router-dom';

export default function Bag() {
    return (
        <div className='bag'>

            {/* left */}
            <div className="left">
                <h2>Bag</h2>
                <ul>
                    <li>
                        <div id="img"><img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/67fcdb78-eda4-4aaa-885e-de5c585d729b/dunk-low-retro-shoes-bCzchX.png" alt="" /></div>
                        <div id="info">
                            <h1>Nike Motiva Premium</h1>
                            <h3>Women's Shoes</h3>
                            <h3>White</h3>

                            <div id="drop-d">
                                <label for="size" id='size'>Size
                                    <select name="size" id="size">
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                    </select></label>
                                <label for="qty" id='qty'>Quantity
                                    <select name="qty" id="qty">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select></label>
                            </div>
                        </div>
                        <div id="del">
                            <CgTrash id='icon' />
                            <h3>MRP: ₹ 27,495</h3>
                        </div>
                    </li>
                    <li>
                        <div id="img"><img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/67fcdb78-eda4-4aaa-885e-de5c585d729b/dunk-low-retro-shoes-bCzchX.png" alt="" /></div>
                        <div id="info">
                            <h1>Nike Motiva Premium</h1>
                            <h3>Women's Shoes</h3>
                            <h3>White</h3>

                            <div id="drop-d">
                                <label for="size" id='size'>Size
                                    <select name="size" id="size">
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                    </select></label>
                                <label for="qty" id='qty'>Quantity
                                    <select name="qty" id="qty">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select></label>
                            </div>
                        </div>
                        <div id="del">
                            <CgTrash id='icon' />
                            <h3>MRP: ₹ 27,495</h3>
                        </div>
                    </li>

                </ul>


            </div>

            {/* Right */}
            <div className="right">
                
                <h2>Summary</h2>
                <div id="bill">
                    <ul>
                        <li><h3>Subtotal</h3><h3>₹ 27,495</h3></li>
                        <li><h3>Estimated Delivery & Handling</h3><h3>₹ 495</h3></li>
                        <hr />
                        <li><h3>Total</h3><h3>₹ 27,495</h3></li>
                        <hr />

                    </ul>

                    <Link to='/checkoutAddr' id='checkOut-btn'>Checkout</Link>
                </div>

            </div>
        </div>
    )
}
