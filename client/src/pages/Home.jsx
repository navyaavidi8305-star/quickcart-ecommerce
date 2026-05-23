import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home(){

return(

<div style={{

background:"#f5f7fb",
minHeight:"100vh"

}}>

<Navbar/>

<section style={{

display:"flex",

flexDirection:"column",

justifyContent:"center",

alignItems:"center",

textAlign:"center",

padding:"80px 20px",

minHeight:"80vh"

}}>

<div style={{

maxWidth:"700px"

}}>

<p style={{

color:"#3b82f6",

fontWeight:"bold",

letterSpacing:"2px"

}}>

SMART SHOPPING EXPERIENCE

</p>

<h1 style={{

fontSize:"60px",

lineHeight:"75px",

color:"#111827",

marginTop:"20px"

}}>

Everything You Need,

<br/>

<span style={{

color:"#2563eb"

}}>

Delivered Faster

</span>

</h1>

<p style={{

fontSize:"18px",

color:"#6b7280",

lineHeight:"30px",

marginTop:"25px"

}}>

Discover electronics, gadgets and premium products with seamless checkout and order tracking.

</p>

<div style={{

marginTop:"30px"

}}>

<Link to="/products">

<button style={{

padding:"15px 35px",

background:"#2563eb",

color:"white",

border:"none",

borderRadius:"10px",

fontSize:"16px",

cursor:"pointer"

}}>

Shop Now

</button>

</Link>

</div>

</div>

<div style={{

marginTop:"50px"

}}>

<img

src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800"

alt="shopping"

style={{

width:"500px",

maxWidth:"100%",

borderRadius:"20px",

boxShadow:
"0 4px 15px rgba(0,0,0,0.1)"

}}

/>

</div>

</section>

<section style={{

padding:"50px"

}}>

<h1 style={{

textAlign:"center",

marginBottom:"40px"

}}>

Featured Categories

</h1>

<div style={{

display:"grid",

gridTemplateColumns:
"repeat(auto-fit,minmax(250px,1fr))",

gap:"25px"

}}>

<div style={cardStyle}>

<img

src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"

style={imgStyle}

alt="Laptop"

/>

<h3>Laptops</h3>

</div>

<div style={cardStyle}>

<img

src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"

style={imgStyle}

alt="Headphones"

/>

<h3>Headphones</h3>

</div>

<div style={cardStyle}>

<img

src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"

style={imgStyle}

alt="Watch"

/>

<h3>Smart Watches</h3>

</div>

</div>

</section>

</div>

)

}

const cardStyle={

background:"white",

padding:"20px",

borderRadius:"15px",

boxShadow:
"0 4px 15px rgba(0,0,0,0.08)",

textAlign:"center"

};

const imgStyle={

width:"100%",

height:"200px",

objectFit:"cover",

borderRadius:"12px"

};

export default Home;