import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../order/SearchOrder'
import Username from '../user/Username'

export default function Header() {
  return (
    <header className='bg-yellow-500 uppercase 
    flex justify-between items-center  py-3 px-4 border-b border-stone-200 sm:px-6'>
        <Link to="/" className='tracking-widest font-semibold'>Fast Pizza Co.</Link>
        <SearchOrder/>
        <Username/>
    </header>
     
  )
}
