import {useState} from "react";
import API from "../services/api";
import {useNavigate} from "react-router-dom";

function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const navigate=useNavigate();

const login=async()=>{

try{

const res=await API.post(

"/auth/login",

{
email,
password
}

);

localStorage.setItem(
"token",
res.data.token
);

alert(
"Login Success"
);

navigate("/products");

}

catch(error){

alert(
error.response?.data?.message
|| "Login Failed"
);

}

}

return(

<div>

<h1>Login</h1>

<input
placeholder="Email"
value={email}
onChange={(e)=>
setEmail(
e.target.value
)
}
/>

<br/><br/>

<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>

setPassword(
e.target.value
)

}

/>

<br/><br/>

<button
onClick={login}
>

Login

</button>

</div>

)

}

export default Login;