import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./features/ui/Home"
import Menu , { Loader as menuLoader} from "./features/menu/Menu"
import Cart from "./features/cart/Cart"
// import Order  from "./features/order/CreateOrder"
import CreateOrder , {action as CreateOrderAction} from "./features/order/CreateOrder";
import AppLayout from "./features/ui/AppLayout";
import Error from "./features/ui/Error"
import Order , {Loader as LoaderOrder}from "./features/order/Order";
import { action } from "./features/order/UpdateOrder";



const router = createBrowserRouter(
    [
        {
            element : <AppLayout/>,
            
            errorElement : <Error/>,

            children : [
                { 
                    path : "/" ,
                element : <Home/>
            },
            {
                path : "/menu" , 
                element : <Menu/>,
                loader : menuLoader
            },
            {path : "/cart", element : <Cart/>},
            {path : "/order/new" , 
            element :<CreateOrder/>,
            action : CreateOrderAction
        
        },
            {path : "/order/:orderId", element : <Order/>,
            loader : LoaderOrder,
            errorElement : <Error/>,
            action : action
        }
            ]

        },
       
    ]
       
    
)
function App() {
 return (
    <RouterProvider router={router} />
 )
}
export default App;