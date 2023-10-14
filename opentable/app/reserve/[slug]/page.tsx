import Header from "./Components/Header"
import Form from "./Components/Form"

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