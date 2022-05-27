import axios from 'axios';
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProducts from '../../../hooks/useProducts';
import ManageInventoryItems from '../ManageInventoryItems/ManageInventoryItems';
import './ManageInventory.css'

const ManageInventory = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = async id => {
        await axios.delete(`http://localhost:5000/product/${id}`);
        toast('Items Deleted');

        const remainingProducts = products.filter(product => product._id !== id);
        setProducts(remainingProducts);
    };

    return (
        <div className='container py-5 d-flex align-items-center'>
            <div className='col col-md-8 mx-auto'>
                <h2 className='mb-3 text-center'>Manage Inventory</h2>
                <div className="add-new-item">
                    <Link to='/inventory/add'>
                        <Button variant="link" className='btn-primary text-white text-decoration-none my-4 d-block ms-auto'>Add New Item</Button>
                    </Link>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Supplier Name</th>
                            <th>Remove Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ManageInventoryItems
                                key={product._id}
                                index={index}
                                product={product}
                                handleDelete={handleDelete}
                            ></ManageInventoryItems>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageInventory;