import {useState} from "react";
import API from "../services/api";
import {useNavigate} from "react-router-dom";

function Register(){

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const navigate=useNavigate();

const register=async()=>{

try{

await API.post(

"/auth/register",

{
name,
email,
password
}

);

alert("Registration Success");

navigate("/login");

}

catch(error){

alert("Registration Failed");

}

};

return(

<div style={{

padding:"40px",
textAlign:"center"

}}>

<h1>Register</h1>

<input

placeholder="Name"

onChange={(e)=>

setName(
e.target.value
)

}

/>

<br/><br/>

<input

placeholder="Email"

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

onChange={(e)=>

setPassword(
e.target.value
)

}

/>

<br/><br/>

<button
onClick={register}
>

Register

</button>

</div>

)

}

export default Register;