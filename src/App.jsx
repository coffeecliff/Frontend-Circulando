
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
 import Home from "./pages/home"
import Login from "./pages/loginPage"
import Register from "./pages/registerPage"
import Explore from "./pages/explorePage"
import Help from "./pages/helpPage"
import Offers from "./pages/offersPage"
import Orders from "./pages/ordersPage"
import Payment from "./pages/paymentPage"

 function App() {
  return (
    <Router>
      <Routes>
        {/*rota raiz do projeto e estrutura padrão de escrita*/}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/offers" element={<Offers/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/payment" element={<Payment/>}/>
      </Routes>
    </Router>
  )
}

export default App
