import {useEffect,useState} from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Checkout(){

const [cart,setCart]=useState([]);

useEffect(()=>{

const items=JSON.parse(
localStorage.getItem("cart")
)||[];

setCart(items);

},[]);

const checkout=async()=>{

const token=localStorage.getItem(
"token"
);

const order={

products:cart.map(item=>({

productId:item._id,

quantity:1

})),

totalAmount:cart.reduce(

(total,item)=>

total+item.price,

0

)

};

await API.post(

"/orders",

order,

{

headers:{

Authorization:
`Bearer ${token}`

}

}

);

alert(
"Order Placed"
);

localStorage.removeItem(
"cart"
);

}

return(

<div>

<Navbar/>

<h1>Checkout</h1>

{

cart.map((item,index)=>(

<div key={index}>

<h3>{item.title}</h3>

<p>₹ {item.price}</p>

</div>

))

}

<button
onClick={checkout}

>

Place Order

</button>

</div>

)

}

export default Checkout;