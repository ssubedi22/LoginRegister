import React, { useState } from "react";

export const Register = (props) => {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">First name</label>
            <input value={first} onChange={(e) => setFirst(e.target.value)} type="First"  id="First" name="First" />
            <label htmlFor="name">Last Name</label>
            <input value={last} onChange={(e) => setLast(e.target.value)} type="Last"  id="Last" name="Last" />
            <label htmlFor="name">Your preferred Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="username"  id="username" name="username"/>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email"  id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}