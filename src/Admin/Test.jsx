import React from 'react';
import './test.scss'
import axios  from "axios";
export default function Test() {


    const BASE_URL = 'http://localhost:8000';
    return (

        <div className='test'>


            <label>Name
                <input type="text" id='name' />
            </label>
            <label>img1
                <input type="text" id='img1' />
            </label>
            <label>img2
                <input type="text" id='img2' />
            </label>
            <label>img3
                <input type="text" id='img3' />
            </label>
            <label>img4
                <input type="text" id='img4' />
            </label>
            <label>price
                <input type="numebr" id='price'/>
            </label>
            <label id='color'>color-{'>'}
                <label htmlFor="" >
                    black<input type="radio" name='color' value="black" />
                </label>
                <label htmlFor="" >
                    white<input type="radio" name='color' value="white" />
                </label>
                <label htmlFor="" >
                    blue<input type="radio" name='color' value="blue" />
                </label>
                <label htmlFor="" >
                    red<input type="radio" name='color' value="red" />
                </label>
                <label htmlFor="" >
                    green<input type="radio" name='color' value="green" />
                </label>
            </label>
            <label>category -{'>'}
                <label htmlFor="">
                    men<input type="radio" name='category' value="men" />
                </label>
                <label htmlFor="">
                    women<input type="radio" name='category' value="women" />
                </label>
                <label htmlFor="">
                    girl<input type="radio" name='category' value="girl" />
                </label>
                <label htmlFor="">
                    boy<input type="radio" name='category' value="boy" />
                </label>
            </label>
            <label>popular -{'>'}
                <label htmlFor="">
                    0<input type="radio" name='pop' value="0" />
                </label>
                <label htmlFor="">
                    1<input type="radio" name='pop' value="1" />
                </label>
            </label>

            <button onClick={sub}>submit</button>
        </div>

    );



    function sub() {
        console.log("sumbit");
        var name = document.getElementById("name").value;
        var img1 = document.getElementById("img1").value;
        var img2 = document.getElementById("img2").value;
        var img3 = document.getElementById("img3").value;
        var img4 = document.getElementById("img4").value;
        var img4 = document.getElementById("img4").value;
        var price = document.getElementById("price").value;


        var color = document.getElementsByName("color");
        var newColor = 'white';
        for (let i = 0; i < color.length; i++) {
            if (color[i].checked)
                newColor = color[i].value;
        }

        var category = document.getElementsByName("category");
        var newCategory = 'men';
        for (let i = 0; i < category.length; i++) {
            if (category[i].checked)
                newCategory = category[i].value;
        }


        const data = { name, img1, img2, img3, img4,price,color:newColor, category:newCategory}

        const result = axios.post(`${BASE_URL}/api/addProduct`, data, { withCredentials: true })
        .then((res) => {
          console.log(res.data)
        })
    }
}
