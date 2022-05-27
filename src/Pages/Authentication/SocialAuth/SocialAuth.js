import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialAuth = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    let setErrMessage;

    const [
        signInWithGoogle,
        userGSignIn,
        loadingGSignIn,
        errGSignIn
    ] = useSignInWithGoogle(auth);

    const [user, loading, err] = useAuthState(auth);

    if (errGSignIn) {
        setErrMessage = errGSignIn.message;
    }
    if (loadingGSignIn || loading) {
        return <Loading />
    }
    if (user) {
        navigate(from, { replace: true });
    }

    const handleGoogleSignIn = async () => {
        await signInWithGoogle();
        if (user) {
            toast('Successfully Login');
            setErrMessage = ''
        }

    }

    return (
        <div>
            <div className='d-flex align-items-center my-3'>
                <span className='w-50 border-bottom'></span>
                <h2 className='mx-2'>Or</h2>
                <span className='w-50 border-bottom'></span>
            </div>
            <p className='text-danger'>{setErrMessage}</p>
            <Button onClick={handleGoogleSignIn} className='btn btn-primary w-50 mx-auto d-block'>Login With Google</Button>
        </div>
    );
};

export default SocialAuth;