import React from 'react';
import './alert.scss';
import { RxCrossCircled } from "react-icons/rx";

export default function Alert({Err_tit,Err_msg,setShowAlert}) {
    return (
        <div className='alert'>
            <div className="error_msg">
                <p> <strong>{Err_tit} : </strong>{Err_msg}</p>
                <RxCrossCircled id='alert_icon' onClick={() => setShowAlert(false)} />
                {/* <RxCrossCircled id='alert_icon' /> */}

            </div>
        </div>
    )
}
