import React, { useState } from 'react'
import './navbar.scss';
import logo from './img/logo.jpg'
import profie from './img/profie.jpg'
import { FaHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from 'react-router-dom';

export default function Navbar() {


    const [ShowModal, setShowModal] = useState(false)
    return (
        <div className='navbar'>
            <Link to='/'>
                <div className="left">
                    <img src={logo} alt="" />
                    <h1>ArcaneSole</h1>
                </div>
            </Link>
            <div className="right">
                <ul>
                    <li>
                        <input type="text" placeholder='search...' />
                    </li>

                    <li><FaHeart id='icon' /></li>
                    <li><Link to='/Bag'><FaShoppingBag id='icon' /></Link></li>
                    <li><Link to='/Profile'><img src={profie} alt="" /></Link></li>
                </ul>
            </div>



            {ShowModal === 'login' &&

                <div className="modal">
                    <div className="modal__box">
                    <RxCrossCircled id='icon' onClick={() => setShowModal(false)}/>

                        <h2>Login</h2>
                        <div className="textbox" style={{ "marginTop": "100px" }}>

                            <label htmlFor="">Email</label>
                            <input type="text" />
                            <label htmlFor="">password</label>
                            <input type="text" />

                        </div>

                        <button onClick={() => setShowModal('register')}>Login</button>
                        <h5>Don`t have an account? Register</h5>
                    </div>
                </div>
            }
            {ShowModal === 'register' &&
                <div className="modal">

                    <div className="modal__box">
                        <RxCrossCircled id='icon'onClick={() => setShowModal(false)}/>
                        <h2>Register</h2>
                        <div className="textbox">
                            <label htmlFor="">Name</label>
                            <input type="text" />
                            <label htmlFor="">Email</label>
                            <input type="text" />
                            <label htmlFor="">password</label>
                            <input type="text" />
                            <label htmlFor="">confirm password</label>
                            <input type="text" />
                        </div>

                        <button>Register</button>
                        <h5 onClick={() => setShowModal('login')}>Already have an account? Login</h5>
                    </div>
                </div>}
        </div>
    )
}
