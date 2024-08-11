import React from 'react'
import Button from '../ui/Button'
import { decreaseItemQuantity, getCurrentQuantityById, increaseItemQuantity  } from './CartSlice'
import { useDispatch } from 'react-redux'

export default function UpdateQuantities({pizzaId , CurrentQuantity}) {
    const dispatch = useDispatch()
  return (
    <div className='flex items-center gap-1 md:gap-3'>
      <Button type="round" onClick={()=> dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
      <span className='text-m font-semibold'>{CurrentQuantity}</span>
      <Button type="round" onClick={()=> dispatch(increaseItemQuantity(pizzaId))}>+</Button>
    </div>
  )
}
