import React from 'react';
import Product from '../product/Product';
import './projects.css';
import { products } from "../../data";


export default function Projects() {
  return (
    <div className='pl' id='projects'>
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
        {/* <p className="pl-desc">Create & inspire</p> */}
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} name={item.name} para={item.para} link={item.link} />
        ))}
      </div>


    </div>
  )
}
