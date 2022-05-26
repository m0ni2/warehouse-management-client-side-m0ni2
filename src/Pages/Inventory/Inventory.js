import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Inventory = () => {
    const [product, setProduct] = useState({});
    const { _id, name, description, price, quantity, supplierName, img } = product;
    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await axios.get(`http://localhost:5000/product/${id}`);
            setProduct(data);
            console.log(data);
        }
        getProduct();
    }, []);

    const handleDelivered = async (id) => {
        await axios.get(`http://localhost:5000/product/${id}?delivered=1`);
        toast('delivered');

        const newQuantity = product.quantity - 1;
        const { quantity, ...rest } = product;
        const newProduct = { quantity: newQuantity, ...rest };
        setProduct(newProduct);

    };

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
                                <Button onClick={() => handleDelivered(_id)} className='btn btn-primary d-block mx-auto'>Delivered</Button>

                                {/* <div className='py-5'>
                                    <h2 className='mb-3'>Re-Stock the Item</h2>
                                    <form className=''>
                                        <input type="email" name='email' className="form-control w-25" placeholder='name@example.com' required />

                                        <input className={`btn btn-primary mx-auto d-block `} type="submit" value="Re-Stock" />
                                    </form>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;