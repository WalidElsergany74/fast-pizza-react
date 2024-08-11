import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import Button from "../ui/Button";
import { addItem, getCurrentQuantityById, getTotalCartQuantity } from "../cart/CartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateQuantities from "../cart/UpdateQuantities";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch()
  const currentQuantity = useSelector(getCurrentQuantityById(id))
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
    
  }

  return (
    <li className='flex gap-4 py-2 pt-0.5'>
      <img className={`h-24 ${soldOut ? "grayscale opacity-70 " :  "" }`} src={imageUrl} alt={name} />
      <div className='felx flex-col grow '>
        <p className='font-medium'>{name}</p>
        <p className='text-sm italic text-stone-500 capitalize'>{ingredients.join(', ')}</p>
        <div className='mt-7 flex items-center justify-between'>
          
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className='uppercase text-sm font-medium text-stone-500'>Sold out</p>}
       
          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateQuantities
                pizzaId={id}
                CurrentQuantity={currentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}

       {!soldOut && !isInCart && <Button type={"small"} onClick={handleAddToCart}>Add to cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
