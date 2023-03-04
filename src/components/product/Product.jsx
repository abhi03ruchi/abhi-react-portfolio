import React from 'react';
import './product.css';

function Product({name , para , link}) {
    return (
        <div className='pc'>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <h3> {name}</h3>
            <div class="pra">
                <p> {para}</p>
                <a class="button" href={link}>Learn More</a>
            </div>
        </div>
    )
}

export default Product
