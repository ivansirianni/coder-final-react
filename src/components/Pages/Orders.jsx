import React from "react"
import OrderListContainer from "../ItemListContainer/OrderListContainer"


export default function Orders() {

    return(
        <div className="orders-cont">
            <h2 className="h2-order">Orders</h2>
            <p className="p-orders">Here you can find out your order information. Check if all info is right.</p>
            <OrderListContainer />
        </div>
    )
}





    
  
  
  