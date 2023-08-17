import React from 'react'
import './browseProduct.scss';

export default function BrowseProduct() {
  return (
    <div className='browseProduct'>

      {/* filter */}
      <div className="left">


        {/* sort by */}
        <div className="sort">
          <h3>Sort By</h3>
          <select name="sort" id="sort">
            <option value="popular">Popular</option>
            <option value="price">Price i</option>
            <option value="price">Price</option>
            <option value="price">Price</option>
          </select>
        </div>

        {/* catgeory */}
        <div className="catg">
          <h2>Category</h2>
          <ul>
            <li>
              <label for="all">All</label>
              <input id="all" type="radio" name='catg' />
            </li>
            <li>
              <label for="mens">Mens</label>
              <input id="mens" type="radio" name='catg' />
            </li>
            <li>
              <label for="womens">Womens</label>
              <input id="womens" type="radio" name='catg' />
            </li>
            <li>
              <label for="girls">Girls</label>
              <input id="girls" type="radio" name='catg' />
            </li>
            <li>
              <label for="boys">Boys</label>
              <input id="boys" type="radio" name='catg' />
            </li>

          </ul>
        </div>


        {/* price */}
        <div className="catg">
          <h2>Price Range</h2>
          <ul>
            <li>
              <label for="pr1">All</label>
              <input id="pr1" name='price' type="radio" />
            </li>
            <li>
              <label for="pr1">0 - 1999</label>
              <input id="pr1" name='price' type="radio" />
            </li>
            <li>
              <label for="pr2">2000 - 4999</label>
              <input id="pr2" name='price' type="radio" />
            </li>
            <li>
              <label for="pr3">5000 - 9999</label>
              <input id="pr3" name='price' type="radio" />
            </li>
            <li>
              <label for="pr4">1000+ </label>
              <input id="pr4" name='price' type="radio" />
            </li>
          </ul>
        </div>




      </div>


      <div className="right">

        <ul>





          <li>
            <div id="img"><img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/176ae550-15e0-4e85-abfd-f5a1685f2031/air-max-pulse-shoes-QShhG8.png" alt="" /></div>
            <div id="info">
              <h3>Nike Air Max Pulse</h3>
              <h2>₹ 13,958</h2>
            </div>
            <div id="view">View</div>
          </li>
          <li>
            <div id="img"><img src="https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/2058cb70-dd58-4b0b-b412-b2539559048b/air-max-pulse-shoes-QShhG8.png" alt="" /></div>
            <div id="info">
              <h3>Nike Air Max Pulse</h3>
              <h2>₹ 13,958</h2>
            </div>
            <div id="view">View</div>
          </li>
          <li>
            <div id="img"><img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/176ae550-15e0-4e85-abfd-f5a1685f2031/air-max-pulse-shoes-QShhG8.png" alt="" /></div>
            <div id="info">
              <h3>Nike Air Max Pulse</h3>
              <h2>₹ 13,958</h2>
            </div>
            <div id="view">View</div>
          </li>
          <li>
            <div id="img"><img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/176ae550-15e0-4e85-abfd-f5a1685f2031/air-max-pulse-shoes-QShhG8.png" alt="" /></div>
            <div id="info">
              <h3>Nike Air Max Pulse</h3>
              <h2>₹ 13,958</h2>
            </div>
            <div id="view">View</div>
          </li>
          <li>
            <div id="img"><img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/176ae550-15e0-4e85-abfd-f5a1685f2031/air-max-pulse-shoes-QShhG8.png" alt="" /></div>
            <div id="info">
              <h3>Nike Air Max Pulse</h3>
              <h2>₹ 13,958</h2>
            </div>
            <div id="view">View</div>
          </li>
          <li>
            <div id="img"><img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/176ae550-15e0-4e85-abfd-f5a1685f2031/air-max-pulse-shoes-QShhG8.png" alt="" /></div>
            <div id="info">
              <h3>Nike Air Max Pulse</h3>
              <h2>₹ 13,958</h2>
            </div>
            <div id="view">View</div>
          </li>




        </ul>


      </div>


    </div>
  )
}
