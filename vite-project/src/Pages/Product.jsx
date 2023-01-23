import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Toy from '../Components/Toy'

export default function Product({pic}) {
const [callbackItem, setCallBackItem]=useState();
useEffect(()=>{
  setCallBackItem(pic)
  console.log(pic);
},[])
  return (
    <div>
      <Toy {...pic}/>
    </div>
  )
}
