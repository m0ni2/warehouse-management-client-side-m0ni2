import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import ManageInventoryItems from '../ManageInventory/ManageInventoryItems/ManageInventoryItems';

const MyItems = () => {
    const [user, loading, err] = useAuthState(auth);

    const [myProducts, setMyProducts] = useState([]);

    useEffect(() => {
        const getMyProducts = async () => {
            try {
                const { data } = await axiosPrivate.get(`https://groceteria-warehouse.herokuapp.com/myItems?email=${user.email}`);
                setMyProducts(data);
            }
            catch {
                getMyProducts();
            }
        }
        getMyProducts();
    }, []);

    const handleDelete = async (id, name) => {
        const agree = window.confirm(`You're going to delete ${name}`)
        if (agree) {
            await axios.delete(`https://groceteria-warehouse.herokuapp.com/product/${id}`);
            toast('Items Deleted');

            const remainingProducts = myProducts.filter(product => product._id !== id);
            setMyProducts(remainingProducts);
        }
    };

    return (
        <div className='container py-5 d-flex align-items-center'>
            <div className='col col-md-8 mx-auto'>
                <h2 className='mb-3 text-center'>My Items ({myProducts.length})</h2>
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
                            myProducts.map((product, index) => <ManageInventoryItems
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

export default MyItems;