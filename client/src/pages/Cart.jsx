import {useEffect,useState} from "react";
import Navbar from "../components/Navbar";

function Cart(){

const [cart,setCart]=useState([]);

useEffect(()=>{

const items=JSON.parse(
localStorage.getItem("cart")
)||[];

setCart(items);

},[]);

return(

<div>

<Navbar/>

<h1>Cart</h1>

{

cart.map((item,index)=>(

<div key={index}

style={{

border:"1px solid black",
margin:"20px",
padding:"20px"

}}

>

<h2>{item.title}</h2>

<p>{item.price}</p>

</div>

))

}

</div>

)

}

export default Cart;