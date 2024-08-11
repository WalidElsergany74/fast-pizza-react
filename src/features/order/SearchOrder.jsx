import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {
    const [query , setQuery] = useState("")
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault();
        navigate(`/order/${query}`)
        if(!query) return;

        setQuery("")
    }
  return (
    <form onSubmit={handleSubmit}>
      <input className='py-2 px-4 rounded-full bg-yellow-100 w-28 sm:w-64 text-sm placeholder:text-stone-400 focus:ring focus:ring-opacity-50 focus:ring-yellow-500 sm:focus:w-72 transition-all duration-300 focus:outline-none' placeholder='Search order #' value={query} onChange={(e) => setQuery(e.target.value)}/>   
    </form>
  
  )
}
