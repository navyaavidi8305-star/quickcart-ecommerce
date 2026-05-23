import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Admin from "./pages/Admin";
import Orders from "./pages/Orders";

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/products" element={<Products/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/checkout" element={<Checkout/>}/>
<Route path="/admin" element={<Admin/>}/>
<Route path="/orders" element={<Orders/>}/>

</Routes>

</BrowserRouter>

)

}

export default App;