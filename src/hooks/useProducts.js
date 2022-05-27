import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await axios.get('http://localhost:5000/product');
            setProducts(data);
        }
        getProducts();
    }, []);

    return [products, setProducts];
};

export default useProducts;