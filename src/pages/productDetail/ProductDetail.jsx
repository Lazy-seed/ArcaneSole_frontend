import React from 'react';
import './productDetail.scss';


import { HiHeart} from "react-icons/hi";

export default function ProductDetail() {
    return (
        <div className='productDetail'>

            <div className="top">

                {/* img */}
                <div className="left">
                    <div className="mini_Img">
                        <ul>
                            <li><img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1ab1dbef-7a86-4ae7-969b-efc887c31fda/motiva-walking-shoes-dCcsVX.png" alt="" srcset="" /></li>
                            <li><img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b019b054-5872-4017-b745-40e1ad200f62/motiva-walking-shoes-dCcsVX.png" alt="" srcset="" /></li>
                            <li><img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/434e4bd4-dc3d-4c98-903b-63e6b6474162/motiva-walking-shoes-dCcsVX.png" alt="" srcset="" /></li>
                        </ul>
                    </div>
                    <div className="lar_Img">
                        <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/77128b3e-515b-4327-b00c-ac549e9539cb/motiva-walking-shoes-dCcsVX.png" alt="" srcset="" />
                    </div>
                </div>



                <div className="right">

                    <div id="info">
                        <h1>Nike Motiva Premium</h1>
                        <h3>Women's Premium Walking Shoes</h3>
                        <h2>MRP : ₹ 9,695</h2>
                        <p>incl. of taxes</p>
                        <p>(Also includes all applicable duties)</p>
                    </div>

                    <div id="size">
                        <h2>Select Size</h2>
                        <ul>
                            <li>UK 3.5</li>
                            <li>UK 3.5</li>
                            <li>UK 3.5</li>
                            <li>UK 3.5</li>
                            <li>UK 3.5</li>
                            <li>UK 3.5</li>
                        </ul>
                    </div>


                    <div id="btns">
                        <button >Add to Bag </button>
                        <button>Wistlist <HiHeart/></button>
                    </div>

                </div>
            </div>

        </div>
    )
}
