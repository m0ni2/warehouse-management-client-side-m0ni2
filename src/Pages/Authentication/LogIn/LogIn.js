import React, { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import SocialAuth from '../SocialAuth/SocialAuth';

const LogIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        err1,
    ] = useSignInWithEmailAndPassword(auth);

    const [
        sendPasswordResetEmail,
        sending,
        err2,
    ] = useSendPasswordResetEmail(auth);


    const handleLogin = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if (email && password) {
            await signInWithEmailAndPassword(email, password);
            toast('Login Successful');
            event.target.reset();
        }
        else {
            toast('Please Enter Your Email, Password')
        }
    }

    const handlePasswordReset = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Password Reset Email Sent');
        }
        else {
            toast('Please Enter Your Email')
        }
    }

    return (
        <div className='container py-5'>
            <div className='col col-md-8 col-lg-6 mx-auto'>
                <h2 className='mb-3'>Please Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-floating mb-3">
                        <input ref={emailRef} type="email" name='email' className="form-control" placeholder='name@example.com' required />
                        <label htmlFor="floatingInput">Email:</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input ref={passwordRef} type="password" name='password' className="form-control" placeholder="Password" autoComplete='on' required />
                        <label htmlFor="floatingPassword">Password:</label>
                    </div>

                    <input className={`btn btn-primary w-50 mx-auto d-block `} type="submit" value="Login" />
                </form>
                <p className='mt-4 mb-2 d-flex align-items-center'>Not Registerd? Please <Link className='p-1 text-decoration-none' to='/register'>Register</Link>
                </p>
                <p className='mt-2 mb-4 d-flex align-items-center'>Forgot Password? Please <Button onClick={handlePasswordReset} variant="link" className='p-1 text-decoration-none'>Reset</Button></p>

                <SocialAuth />
            </div>
        </div>
    );
};

export default LogIn;