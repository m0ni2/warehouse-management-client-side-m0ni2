import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = ({ product }) => {
    const { _id, name, description, price, quantity, supplierName, img } = product;
    const navigate = useNavigate();

    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="w-100 card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">Price: {price} Tk.</p>
                    <p className="card-text">Quantity: {quantity}</p>
                    <p className="card-text">Supplier: {supplierName}</p>
                </div>
                <div className="card-footer bg-transparent border-0 mb-2">
                    <Button onClick={() => navigate(`/inventory/${_id}`)} className='btn btn-primary d-block mx-auto'>Stock Update</Button>
                </div>
            </div>
        </div>
    );
};

export default Item;