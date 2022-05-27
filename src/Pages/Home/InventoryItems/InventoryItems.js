import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import InventoryItem from '../InventoryItem/InventoryItem';

const InventoryItems = () => {
    const [products] = useProducts();


    return (
        <div className='container py-5'>
            <h2 className='text-center mb-4'>Inventory Items</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map(product => <InventoryItem
                        key={product._id}
                        product={product}
                    />)
                }
            </div>

            <Link to='/inventory/manage'>
                <Button variant="link" className='btn-primary text-white text-decoration-none my-4 d-block mx-auto'>Manage Inventories</Button>
            </Link>
        </div>
    );
};

export default InventoryItems;