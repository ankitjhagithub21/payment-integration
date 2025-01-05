import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='w-full fixed top-0 left-0 bg-white z-50'>
        <nav className='max-w-6xl w-full px-5 py-4 mx-auto flex justify-between items-center border-b'>
            <div className='bg-indigo-500 text-white px-4 py-1 rounded-lg'>
                Stripe Payment Gateway
            </div>
            <ul className='flex gap-5 items-center'>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/cart"} className="bg-indigo-500 text-white rounded-lg px-2 py-1">Cart</NavLink>
            </ul>
        </nav>
    </header>
  )
}

export default Header