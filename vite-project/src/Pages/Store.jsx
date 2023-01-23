import React from 'react'
import { useState, useEffect } from 'react'
import ShoesData from '../data/store.json'
import Toy from '../Components/Toy';

export default function Store() {
    const [ShoesList, SetShoesList] = useState([]);

    function Reload() {
        SetShoesList(ShoesData);
    }

    useEffect(() => {
        Reload();
    }, [])

    return (
        <>
        <h1>All Collections</h1>
        <div className='store'>
            {ShoesList.map((item) => <Toy key={item.id}{...item} />)}
        </div>
        </>
    )
}
