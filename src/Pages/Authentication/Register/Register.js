import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialAuth from '../SocialAuth/SocialAuth';
import { toast } from 'react-toastify';

const Register = () => {
    const [checked, setChecked] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        err,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, err1] = useUpdateProfile(auth);

    const handleRegister = async event => {
        event.preventDefault();
        const displayName = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
        toast('New User Created Successfully');
        event.target.reset();
        setChecked(!checked);
    }

    // if (err) {
    //     return (
    //         <div>
    //             <p>err: {err.message}</p>
    //         </div>
    //     );
    // }
    // if (loading) {
    //     return <p>Loading...</p>;
    // }
    if (user) {
        <p>Registered User: {user.email}</p>
        console.log(user)
    }
    return (
        <div className='container py-5'>
            <div className='col col-md-8 col-lg-6 mx-auto'>
                <h2 className='mb-3'>Please Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="form-floating mb-3">
                        <input type="name" name='name' className="form-control" placeholder='firstName lastName' required />
                        <label htmlFor="floatingInput">Name:</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" name='email' className="form-control" placeholder='name@example.com' required />
                        <label htmlFor="floatingInput">Email:</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" name='password' className="form-control" placeholder="Password" autoComplete='on' required />
                        <label htmlFor="floatingPassword">Password:</label>
                    </div>
                    <div className="mb-3 form-check">
                        <input onClick={() => setChecked(!checked)} type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Please Accept <Link className='text-decoration-none' to='/termsofservice'>Terms of Service</Link></label>
                    </div>
                    <input className={`btn btn-primary w-50 mx-auto d-block ${checked ? '' : 'disabled'}`} type="submit" value="Register" />
                </form>
                <p className='my-4'>Already Registered? Please <Link className='text-decoration-none' to='/login'>Login</Link></p>

                <SocialAuth />
            </div>
        </div>
    );
};

export default Register;