import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import data from '../data/store.json'

export default function Toy({ name, image, price, salePrice }) {

  return (
    <section className='toy-block'>
      <div className='toy'>
         
          <img src={image} />
       
        <h3>{name}</h3>
        {
          salePrice < price ?
            <p><span className='line-througth price'>{price} </span>
              <span className='price'> {salePrice} </span>
            </p>
            :
            <p><span className='price'>{price} </span> </p>
        }
      </div>
    </section>
  )
}
