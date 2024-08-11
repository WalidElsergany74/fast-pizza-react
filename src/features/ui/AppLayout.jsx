import React from 'react'
import Header from './Header'
import CartOverview from "../cart/CartOverview"
import { Outlet, useNavigation } from 'react-router-dom'
import Loading from './Loading';
 
export default function AppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
  return (
    <div className='grid grid-rows-[auto_1fr_auto]   h-screen'>
        {isLoading && <Loading/>}
      <Header/>

    <div className='overflow-scroll'>
      <main className='max-w-3xl mx-auto '>
        <Outlet/>
      </main>
    </div>
      
      

      <CartOverview/>
    </div>
  )
}
