import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await axios.get('https://groceteria-warehouse.herokuapp.com/product');
                setProducts(data);
            }
            catch (err) {
                getProducts();
            }
        }
        getProducts();
    }, []);

    return [products, setProducts];
};

export default useProducts;