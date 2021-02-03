import React, { useState } from 'react';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function emailOnChange(event) {
        setEmail(event.target.value)
    };

    function passwordOnChange(event) {
        setPassword(event.target.value)
    }

    return (
    <div>
        <h3>Sign Up</h3>
        <input type="text" placeholder= "email signup" value={email}onChange={(e) => emailOnChange(e)} />
        <input type ="text" placeholder = "password signup" value= {password} onChange={(e) => passwordOnChange(e)}/>
    </div>
    )

}



export default Signup;