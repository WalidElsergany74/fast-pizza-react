import React from 'react'
import { useSelector } from 'react-redux'

export default function Username() {
  const userName = useSelector((state) => state.user.username)
  if (!userName) return null;
  return (
    <div className='text-sm hidden md:block font-semibold'>
    {userName}
    </div>
  )
}
