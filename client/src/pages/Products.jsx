import {useEffect,useState} from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Products(){

const [products,setProducts]=useState([]);

useEffect(()=>{

fetchProducts();

},[]);

const fetchProducts=async()=>{

const res=await API.get("/products");

setProducts(res.data);

};

const addToCart=(item)=>{

let cart=

JSON.parse(
localStorage.getItem("cart")
)||[];

cart.push(item);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

alert("Added To Cart");

};

return(

<div style={{

background:"#f4f4f4",
minHeight:"100vh"

}}>

<Navbar/>

<h1 style={{

textAlign:"center",
padding:"20px"

}}>

QuickCart Products

</h1>

<div style={{

display:"grid",

gridTemplateColumns:

"repeat(auto-fit,minmax(250px,1fr))",

gap:"20px",

padding:"20px"

}}>

{

products.map((item)=>(

<div key={item._id}

style={{

background:"white",

padding:"20px",

borderRadius:"12px",

boxShadow:

"0 4px 10px rgba(0,0,0,0.1)"

}}

>

<img

src={item.image}

alt={item.title}

style={{

width:"100%",
height:"200px",
objectFit:"cover",

borderRadius:"10px"

}}

/>

<h2>{item.title}</h2>

<p>{item.description}</p>

<h3>

₹ {item.price}

</h3>

<button

style={{

background:"#222",

color:"white",

padding:"10px",

border:"none",

borderRadius:"6px",

width:"100%"

}}

onClick={()=>

addToCart(item)

}

>

Add To Cart

</button>

</div>

))

}

</div>

</div>

)

}

export default Products;