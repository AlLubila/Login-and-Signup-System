import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';
import './Signup.css'
import { Link } from 'react-router-dom';
export const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            console.error(error.message);
        })
    }

    return (
        <div className='container'>
        <div className="form-box">
            <form className="form">
                <span className="title">Sign In</span>
                <span className="subtitle">Connect to your account.</span>
                <div className="form-container">
                    <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={handleLogin}>Log in</button>
            </form>
            <div className="form-section">
                <p>Create an account <Link to="/signup">Sign Up</Link> </p>
            </div>
        </div>
    </div>
    )
}