import React, {useContext, useEffect, useState} from 'react';
import { get_product } from '../helpers/api';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const fetchProduct = () => {
        get_product('product').then((res) => {
            setProducts(res);
        })
    }

    useEffect(() => {
        fetchProduct();
    }, [])
    return (
        <>
        {products.map((i, v) => (
            <div>
                <Link to={`/products/${i.id}`}>{i.productName}</Link>
            </div>
        ))}
        </>
    )

}

export default ProductList;