import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Profil() {
  return (
    <div className='profil'>
      <h1>Profil</h1>
      <ul>
        <li>
          <Link to='/profil/orders'>My Orders</Link>
        </li>
        <li>
          <Link to='/profil/settings'>Settings</Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  )
}
