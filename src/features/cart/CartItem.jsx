import { useDispatch, useSelector } from "react-redux";


import {  getCurrentQuantityById } from "./CartSlice";
import DeleteItem from "./DeleteItem";

import UpdateQuantities from "./UpdateQuantities";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
   const dispatch = useDispatch()
   const currentQuantity = useSelector(getCurrentQuantityById(pizzaId))
   
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between ">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      
      
      <div className='flex sm:gap-6 items-center justify-between' >
      <UpdateQuantities pizzaId={pizzaId} 
      CurrentQuantity={currentQuantity} />
         <DeleteItem pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
