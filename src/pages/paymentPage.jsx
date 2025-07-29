import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import PaymentForm from "../components/paymentForm";




const  PaymentPage = () =>{
    return(
        <>
            <div className="flex flex-col min-h-screen">
            <Navbar />
            
            <div>
                <PaymentForm/>
            </div>

            </div>
            <Footer />
        </>
    )
}

export default PaymentPage;