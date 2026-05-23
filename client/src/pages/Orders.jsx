import {useEffect,useState} from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Orders(){

const [orders,setOrders]=useState([]);

useEffect(()=>{

fetchOrders();

},[]);

const fetchOrders=async()=>{

const token=
localStorage.getItem(
"token"
);

const res=await API.get(

"/orders",

{

headers:{

Authorization:
`Bearer ${token}`

}

}

);

setOrders(
res.data
);

};

return(

<div>

<Navbar/>

<h1>Order History</h1>

{

orders.map((item)=>(

<div

key={item._id}

style={{

border:"1px solid black",
margin:"20px",
padding:"20px"

}}

>

<p>

Status:
{item.status}

</p>

<p>

Total:
₹ {item.totalAmount}

</p>

</div>

))

}

</div>

)

}

export default Orders;