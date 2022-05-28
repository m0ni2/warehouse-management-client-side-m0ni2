import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddInventoryItem = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleAddNewItem = async event => {
        event.preventDefault();
        const email = user.email;
        const name = event.target.name.value;
        const price = parseInt(event.target.price.value);
        const quantity = parseInt(event.target.quantity.value);
        const weight = event.target.weight.value;
        const supplierName = event.target.supplierName.value;
        const description = event.target.description.value;
        const img = event.target.img.value;

        const newItem = { email, name, description, price, quantity, weight, supplierName, img };

        await axios.post('https://groceteria-warehouse.herokuapp.com/product', newItem);
        toast('Item Added')
    }

    return (
        <div className='container py-5'>
            <div className='col col-md-8 col-lg-6 mx-auto'>
                <h2 className='mb-3 text-center'>Add Inventory Item</h2>

                <form onSubmit={handleAddNewItem}>
                    <div className="form-floating mb-3">
                        <input type="name" name='name' className="form-control" placeholder='Product Name' required />
                        <label htmlFor="floatingInput">Product Name:</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" name='price' className="form-control" placeholder='Product Price' required />
                        <label htmlFor="floatingInput">Product Price:</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" name='quantity' className="form-control" placeholder='Product Quantity' required />
                        <label htmlFor="floatingInput">Product Quantity:</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" name='weight' className="form-control" placeholder='Product Quantity' required />
                        <label htmlFor="floatingInput">Product Weight:</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" name='supplierName' className="form-control" placeholder='Product Supplier' required />
                        <label htmlFor="floatingInput">Product Supplier Name:</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control" name='description' placeholder="Product Description" style={{ height: '100px' }}></textarea>
                        <label htmlFor="floatingTextarea">Product Description:</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" name='img' className="form-control" placeholder='Product Supplier' required />
                        <label htmlFor="floatingInput">Product Img URL:</label>
                    </div>

                    <input className='btn btn-primary w-50 mx-auto d-block' type="submit" value="Add New Item" />
                </form>
            </div>
        </div>
    );
};

export default AddInventoryItem;