import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Inventory = () => {
    const [product, setProduct] = useState({});
    const { _id, name, description, price, quantity, supplierName, img } = product;
    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await axios.get(`https://groceteria-warehouse.herokuapp.com/product/${id}`);
            setProduct(data);
        }
        getProduct();
    }, []);

    const updateProduct = quntty => {
        const nwQuantity = quntty;
        const { quantity, ...rest } = product;
        const newProduct = { quantity: nwQuantity, ...rest };
        setProduct(newProduct);
    }

    const handleDelivered = async () => {
        const newQuantity = quantity - 1;
        if (newQuantity > -1) {
            await axios.get(`https://groceteria-warehouse.herokuapp.com/product/${_id}?delivered=1`);
            toast('Product Delivered');
            updateProduct(newQuantity);
        }
        else {
            toast('Product cannot be negative value');
        }
    };

    const handleReStock = async (event) => {
        event.preventDefault();
        let newQuantity = parseInt(event.target.quantity.value);
        if (newQuantity > 0) {
            await axios.get(`https://groceteria-warehouse.herokuapp.com/product/${_id}?reStock=${newQuantity}`);
            toast('Product Added');

            newQuantity += quantity;
            updateProduct(newQuantity);
            event.target.reset();
        }
        else {
            toast('Product cannot be negative value');
        }
    }

    return (
        <div className='container py-5 d-flex align-items-center'>
            <div className='col col-md-8 mx-auto'>
                <h2 className='mb-3 text-center'>Inventory</h2>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={img} className="w-100 rounded-start card-img" alt={name} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">Price: {price} Tk.</p>
                                <p className="card-text">Quantity: {quantity}</p>
                                <p className="card-text">{description}</p>
                                <p className="card-text">Supplier: {supplierName}</p>
                                <p className="card-text">Product ID: {_id}</p>
                                <Button onClick={() => handleDelivered()} className='btn btn-primary d-block ms-auto w-50'>Delivered</Button>

                                <div className='py-5'>
                                    <h4 className='mb-3'>Re-Stock the Item</h4>
                                    <form onSubmit={handleReStock} className='d-flex justify-content-between'>
                                        <input type="quantity" name='quantity' className="form-control w-50" placeholder='Quantity' required />

                                        <input className='btn btn-primary ms-auto d-block w-50' type="submit" value="Re-Stock" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to='/inventory/manage'>
                    <Button variant="link" className='btn-primary text-white text-decoration-none my-4 d-block mx-auto'>Manage Inventories</Button>
                </Link>
            </div>
        </div>
    );
};

export default Inventory;