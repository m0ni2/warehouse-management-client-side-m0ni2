import React from 'react';
import { Button } from 'react-bootstrap';

const ManageInventoryItems = ({ product, handleDelete, index }) => {
    const { _id, name, price, quantity, supplierName } = product;
    const count = index + 1;
    return (
        <tr>
            <td>{count}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{supplierName}</td>
            <td><Button onClick={() => handleDelete(_id, name)} className='mx-auto d-block btn-danger'>X</Button></td>
        </tr >
    );
};

export default ManageInventoryItems;