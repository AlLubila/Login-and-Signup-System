import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import createUserWithEmailAndPassword
import { auth } from './firebaseConfig';
import './Signup.css'
import { Link } from 'react-router-dom';
export const Signup = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleSignup = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
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
                    <span className="title">Sign up</span>
                    <span className="subtitle">Create a free account with your email.</span>
                    <div className="form-container">
                        <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button onClick={handleSignup}>Sign up</button>
                </form>
                <div className="form-section">
                    <p>Have an account? <Link to="/login">Log in</Link> </p>
                </div>
            </div>
        </div>
    )
}
