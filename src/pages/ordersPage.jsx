import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import OrdersForm from "../components/ordersForm";




const  OrdersPage = () =>{
    return(
        <>
            <div className="flex flex-col min-h-screen">
            <Navbar />
            
            <div>
                <OrdersForm/>
            </div>

            </div>
            <Footer />
        </>
    )
}

export default OrdersPage;