import React from 'react'
import Button from '../ui/Button'
import { useFetcher } from 'react-router-dom'
import { updateOrder } from '../../services/apiRestaurant'

export default function UpdateOrder({order}) {
    const fetcher = useFetcher()
  return (
    <div>
        <fetcher.Form method='PATCH' className='text-right'>
              <Button type={"primary"}>Make priority</Button>
        </fetcher.Form>
    
    </div>
  )
}

export async function  action({request, params}) {
const data ={priority : true}
updateOrder(params.orderId , data)
return null
}
