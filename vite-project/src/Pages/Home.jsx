import React, { useState, useEffect, } from 'react'
import ShoesData from '../data/store.json'
import Toy from '../Components/Toy';
import { Link } from 'react-router-dom';


export default function Home() {
  const [DiscountShoes, SetDiscountShoes] = useState([])

  useEffect(() => {
    SetDiscountShoes(ShoesData.filter((item) => item.salePrice < item.price))
    console.log(DiscountShoes);
  }, [])



  return (
    <>
    <h1>Specials of the week</h1>
    <section className='home'>
      {
        DiscountShoes.map((item) => <Toy key={item.id} {...item} /> )
      }
    </section>
    </>
  )
}
