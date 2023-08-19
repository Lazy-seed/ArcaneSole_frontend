import React from 'react'
import './profile.scss';
import profile from './profie.jpg';
import { CgProfile } from "react-icons/cg";
import { TbTruckDelivery } from "react-icons/tb";
import { BiHelpCircle } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { CgTrash } from 'react-icons/cg'
import { Link, Outlet } from 'react-router-dom';
import OrderProduct from '../../Components/orderProduct/OrderProduct';
export default function Profile() {
    return (
        <div className='profile'>


            {/* left------------------------------------------------------------- */}
            <div className="left">


                <div className="menu">
                    <ul>
                        <li>
                            <img src={profile} alt="" />
                            <div id="info">
                                <h3>Devanshi</h3>
                                <h4>example@gmail.com</h4>
                            </div>
                        </li>
                        <hr />
                        <li>
                           <Link to='/Profile/edit'> <CgProfile id='icon' /> <h2>Edit Profile</h2></Link>
                        </li>
                        <li>
                        <Link to='/Profile/order'><TbTruckDelivery id='icon' /> <h2>Orders</h2></Link>
                        </li>
                        <li>
                            <BiHelpCircle id='icon' /> <h2>Help</h2>
                        </li>
                        <hr />
                        <li>
                            <BiLogOut id='icon' /> <h2>Logout</h2>
                        </li>
                    </ul>
                </div>
            </div>


            {/* right ------------------------------------------------------------- */}
            <div className="right">
               <Outlet/>

            </div>



        </div>
    )
}
