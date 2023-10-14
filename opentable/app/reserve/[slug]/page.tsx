import Header from "./Components/Header"
import Form from "./Components/Form"
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Reservation | OpenTable',
}

export default function RestaurantReserve() {
  return (    
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto">
        <Header />
        <Form />
      </div>
    </div>
  )
}