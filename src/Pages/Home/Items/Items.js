import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const { data } = await axios.get('http://localhost:5000/product');
            setProducts(data);
        }
        getProducts();
    }, []);

    return (
        <div className='container'>
            <h2>Items</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map(product => <Item
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
        </div>
    );
};

export default Items;