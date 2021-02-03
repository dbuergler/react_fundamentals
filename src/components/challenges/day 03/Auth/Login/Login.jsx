import React, { useState } from 'react';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function emailOnChange(event) {
        console.log(event.target.value);
        setEmail(event.target.value)
    };

    function passwordOnCharge(event) {
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    return  (
    <div>
        <h3>Login</h3>
        <input type ="text" placeholder ="email login" value= {email} onChange={(e) => emailOnChange(e)} />
        <input type ="text" placeholder = "password login" value= {password} onChange={(e) => passwordOnCharge(e)}/>
    </div> 

    )
};

export default Login;