import React from 'react'
import './orderProduct.scss'

export default function OrderProduct() {
    return (
        <div className='orderProduct'>
            <h2>Orders</h2>
            <div className="content">

                <ul>
                    <li>
                        <div id="img"><img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/67fcdb78-eda4-4aaa-885e-de5c585d729b/dunk-low-retro-shoes-bCzchX.png" alt="" /></div>
                        <div id="info">
                            <h1>Nike Motiva Premium</h1>
                            <h3>Women's Shoes</h3>
                            <h3>White</h3>

                            <div id="drop-d">
                                <label for="size" id='size'>Size: 10</label>
                                <label for="qty" id='qty'>Quantity: 2</label>
                            </div>
                        </div>
                        <div id="del">
                            <h2 id='status'>Delivered</h2>
                            <h3>MRP: ₹ 27,495</h3>
                        </div>
                    </li>




                </ul>
            </div>
        </div>
    )
}
