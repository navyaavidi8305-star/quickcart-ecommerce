import {Link} from "react-router-dom";

function Navbar(){

const logout=()=>{

localStorage.removeItem(
"token"
);

alert(
"Logged Out"
);

};

return(

<nav style={{

display:"flex",
gap:"20px",
padding:"20px",
background:"#222"

}}>

<Link
to="/"
style={{color:"white"}}
>

Home

</Link>

<Link
to="/products"
style={{color:"white"}}
>

Products

</Link>

<Link
to="/cart"
style={{color:"white"}}
>

Cart

</Link>

<Link
to="/checkout"
style={{color:"white"}}
>

Checkout

</Link>

<Link
to="/orders"
style={{color:"white"}}
>

Orders

</Link>

<Link
to="/register"
style={{color:"white"}}
>

Register

</Link>

<Link
to="/login"
style={{color:"white"}}
>

Login

</Link>

<button
onClick={logout}
>

Logout

</button>

</nav>

)

}

export default Navbar;