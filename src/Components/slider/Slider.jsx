import React from 'react'
import './slider.scss';
import shoe from './shoe.png'
import { Link } from 'react-router-dom';
import bg from './bg.png'

export default function Slider() {
    return (
        <div className='slider'>
            <section className="carousel" >
                <div className="box">
                    <div className="title">
                        <h2><span>A</span>rcane </h2>
                        <h3><span>S</span>ole</h3>
                        <p>Try your best sole here  </p>
                        <Link to='/BrowseProduct/all'>Explore</Link>
                    </div>
                    <img src={shoe} alt="" />
                </div>

            </section>

        </div>
    )
}
