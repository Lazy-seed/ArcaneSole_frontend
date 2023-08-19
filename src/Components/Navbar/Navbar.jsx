import React from 'react'
import './navbar.scss';
import logo from './img/logo.jpg'
import profie from './img/profie.jpg'
import { FaHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Navbar() {
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

                    <li><FaHeart id='icon'/></li>
                    <li><Link to='/Bag'><FaShoppingBag id='icon'/></Link></li>
                    <li><img src={profie} alt="" srcset="" /></li>
                </ul>
            </div>
        </div>
    )
}
