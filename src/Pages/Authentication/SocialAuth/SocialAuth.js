import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialAuth = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return (
        <div>
            <div className='d-flex align-items-center my-3'>
                <span className='w-50 border-bottom'></span>
                <h2 className='mx-2'>Or</h2>
                <span className='w-50 border-bottom'></span>
            </div>
            <Button onClick={() => signInWithGoogle()} className='btn btn-primary w-50 mx-auto d-block'>Login With Google</Button>
        </div>
    );
};

export default SocialAuth;