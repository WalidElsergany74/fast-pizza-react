// Test ID: IIDSAT

import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";

import OrderItem from "./OrderItem"
import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder";


function Order() {

const order = useLoaderData()
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  const fetcher = useFetcher()
  useEffect(function() {
    if(!fetcher.data && fetcher.state === "idle") fetcher.load("/menu")
  } , [fetcher])
  

  return (
    <div className='py-6 px-4 space-y-8'>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-semibol text-xl">Order #{id} Status</h2>

        <div className="space-x-2">
          {priority && <span className="bg-red-500 text-red-50 rounded-full px-3 py-1 text-sm font-semibold tracking-wide">Priority</span>}
          <span className="bg-green-500 text-green-50 rounded-full px-3 py-1 text-sm font-semibold tracking-wide">{status} order</span>
        </div>
      </div>

      <ul className="divide-y-2 border-b border-t divide-stone-200 ">
        {cart.map((item) => <OrderItem item={item} key={item.id} 
        ingredients={fetcher?.data?.find((el) => el.id === item.pizzaId)?.ingredients ?? []}
        isLoadingIngredients={fetcher.state === "loading"}
        />)}
      </ul>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-meduim">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div className="space-y-2 px-6 py-5 bg-stone-200">
        <p className="text-sm font-medium text-stone-600">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p className="text-sm font-medium text-stone-600">Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-bold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}
export async function Loader({params}){
const order = await getOrder(params.orderId);
return order;
}

export default Order;
