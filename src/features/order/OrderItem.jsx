import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;
  console.log(isLoadingIngredients)

  return (
    <li className="py-3">
      <div className="flex gap-4 text-sm items-center justify-between">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">{isLoadingIngredients ? "Loading..." : ingredients.join(", ")}</p>
    </li>
  );
}

export default OrderItem;
