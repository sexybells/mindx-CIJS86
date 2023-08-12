import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { get_product } from '../helpers/api';

const ProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        get_product('/product/'+id).then((res) => {
            setProduct(res);
        })
    }, [])
    return (
        <div>
            <p>{product.productName}</p>
        </div>
    )
}

export default ProductDetail;