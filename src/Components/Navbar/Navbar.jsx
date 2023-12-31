import React, { useEffect, useState } from 'react'
import './navbar.scss';
import logo from './img/logo.jpg'
import profie from './img/profie.jpg'
import { FaHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { ImSearch } from "react-icons/im";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Alert from '../Alert/Alert';

export default function Navbar({setisLogin}) {



    useEffect(() => {

        axios.get('http://localhost:8000/api/userInfo', { withCredentials: true }).then((response) => {
            // console.log(response.data.success);
            setIsLogin(response.data.success);
            setisLogin(response.data.success);

        })
    }, [])



    const [IsLogin, setIsLogin] = useState(false);
    const [ShowModal, setShowModal] = useState(false);
    const [ShowAlert, setShowAlert] = useState(false);
    const [Err_tit, setErr_tit] = useState('');
    const [Err_msg, setErr_msg] = useState('');



    setTimeout(() => {
        setShowAlert(false)
    }, 5000);




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

                    <li><Link to ='/search'><ImSearch id='icon' /></Link></li>
                    <li><FaHeart id='icon' /></li>
                    {IsLogin? <li><Link to='/Bag'><FaShoppingBag id='icon' /></Link></li>:<li onClick={() => setShowModal('login')}><FaShoppingBag id='icon' /></li> }
                    
                    {IsLogin && <li><Link to='/Profile/edit'><img src={profie} alt="" /></Link></li> }
                    {!IsLogin && <li onClick={() => setShowModal('login')}><button className='login-btn'>Login</button></li> }
           
           
                </ul>
            </div>

            {/* error msg */}
            {ShowAlert &&
            <Alert Err_tit={Err_tit}  Err_msg={Err_msg} setShowAlert={setShowAlert}/>}


            {ShowModal === 'login' &&

                <div className="modal">
                    <div className="modal__box">
                        <RxCrossCircled id='icon' onClick={() => setShowModal(false)} />

                        <h2>Login</h2>
                        <div className="textbox" style={{ "marginTop": "100px" }}>

                            <label htmlFor="">Email</label>
                            <input type="text" id='email' />
                            <label htmlFor="">Password</label>
                            <input type="text" id='pass' />

                        </div>

                        <button onClick={login_fun}>Login</button>
                        <h5 onClick={() => setShowModal('register')}>Don`t have an account? Register</h5>
                    </div>
                </div>
            }
            {ShowModal === 'register' &&
                <div className="modal">

                    <div className="modal__box">
                        <RxCrossCircled id='icon' onClick={() => setShowModal(false)} />
                        <h2>Register</h2>
                        <div className="textbox">
                            <label htmlFor="">Name</label>
                            <input type="text" id='fname' />
                            <label htmlFor="">Email</label>
                            <input type="text" id='email' />
                            <label htmlFor="">Password</label>
                            <input type="text" id='pass' />
                            <label htmlFor="">confirm password</label>
                            <input type="text" id='cpass' />
                        </div>

                        <button onClick={register}>Register</button>
                        <h5 onClick={() => setShowModal('login')}>Already have an account? Login</h5>
                    </div>
                </div>}
        </div>
    );



    function register(params) {
        const fname = document.getElementById('fname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('pass').value;
        const cpass = document.getElementById('cpass').value;

        if (fname.trim() === '' || email.trim() === '' || password.trim() === '' || cpass.trim() === '') {
            console.log("empty");
            setErr_tit("Error");
            setErr_msg("Fields cannot be Empty ")
            setShowAlert(true);
            return null;
        }

        if (password !== cpass) {
            console.log("pass not match");
            setErr_tit("Error");
            setErr_msg("Password not match")
            setShowAlert(true);
            return null;
        }

        const data = { fname, email, password }


          axios.post('http://localhost:8000/api/newUser', data, { withCredentials: true }).then((response) => {
            console.log(response);
            setErr_tit("Success");
            setErr_msg("User has been Register successfully")
            setShowAlert(true);
        }).catch((err) => { console.log(err); })



    }


    function login_fun() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('pass').value;

        if (email.trim() === '' || password.trim() === '') {
            console.log("empty");
            setErr_tit("Error");
            setErr_msg("Fields cannot be Empty ")
            setShowAlert(true);
            return null;
        }
        const data = { email, password }

          axios.post('http://localhost:8000/api/login', data, { withCredentials: true }).then((response) => {
            console.log(response.data.success);

            if (response.data.success === false) {
                setErr_tit("Error");
                setErr_msg("Invalid Credentials")
                setShowAlert(true);
            } else {
                setErr_tit("Success");
                setErr_msg("Login successfull")
                setShowAlert(true);
                setShowModal(false);
                window.location.reload();

            }
        }).catch((err) => {
            console.log(err);
            setErr_tit("Error");
            setErr_msg("User not Found")
            setShowAlert(true);
        })

    }
}
