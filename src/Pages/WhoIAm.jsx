import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products as productsData } from '../data.json';
import { motion } from 'framer-motion';



function Cart() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    

    useEffect(() => {
        // Find product based on id
        const foundProduct = productsData.find(product => product.id.toString() === id);
        if (foundProduct) {
            setProduct(foundProduct);
        } else {
            // Handle case where product with given id is not found
            setProduct(null); // or handle error
        }
    }, [id]);

    if (!product) {
        return <div>Loading...</div>; // or handle loading state
    }

    return (
        <div className="flex justify-center items-center h-min-screen py-20 px-20 bg-black">
            <div className="max-w-4xl w-full mx-auto p-4 bg-gray-900 rounded-lg shadow-lg">
                <img src={`${product.image}`} alt="Product Image" className=" mx-auto rounded-lg mb-4" />
                <h2 className="text-gray-50 text-4xl font-bold text-center mb-4">{product.name}</h2>
                <p className="text-gray-100 text-xl font-semibold mb-2">Brand: {product.brand}</p>
                <p className="text-gray-200 text-xl font-semibold mb-2">Price: ${product.price}</p>
                <p className="text-gray-200 font-semibold mb-2">Sizes Available: {product.sizes.join(', ')}</p>
                <p className="text-gray-200 font-semibold mb-2">Colors Available: {product.colors}</p>
                <p className="text-gray-200 font-semibold mb-2">Description: {product.description}</p>
                <div className="mt-4 flex justify-center">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
