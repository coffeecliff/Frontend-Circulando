import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Explore from "../components/explore";


const  ExplorePage = () =>{
 

 
  return (
    <>
    

    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div>
        <Explore/>
      </div>

      <Footer/>
    </div>

  </>
  )
}

export default ExplorePage;