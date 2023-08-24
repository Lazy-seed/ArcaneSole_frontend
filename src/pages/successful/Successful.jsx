import React from 'react'
import './successful.scss';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import {Link} from 'react-router-dom'

export default function Successful() {
  return (
    <div className='successful'>
      <div className="container">
        <IoMdCheckmarkCircleOutline id='icon'/>
        <h2>Hooray!!!!</h2>
        <h3>Your order has Confimred</h3>
        <h4>Your order details has been sent to your email address <span>arkd@gmail.com</span></h4>
        <Link to="/">Continue Shopping </Link>
    
      </div>
    </div>
  )
}
