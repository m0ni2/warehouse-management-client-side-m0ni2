import React from 'react';
import { Button } from 'react-bootstrap';

const SocialAuth = () => {
    return (
        <div>
            <div className='d-flex align-items-center my-3'>
                <span className='w-50 border-bottom'></span>
                <h2 className='mx-2'>Or</h2>
                <span className='w-50 border-bottom'></span>
            </div>
            <Button className='btn btn-primary w-50 mx-auto d-block'>Google</Button>
        </div>
    );
};

export default SocialAuth;