import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { products as productsData } from '../data.json';
import { motion } from 'framer-motion';
import { Context } from '../main';
import { ethers } from 'ethers';
import { toast } from 'react-toastify';

const Cart = ({ state }) => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const [message, setMessage] = useState("");
    const [price, setPrice] = useState("");

    const { isUserAuthenticated } = useContext(Context);
    const navigateTo = useNavigate();

    useEffect(() => {
        // Find product based on id
        const foundProduct = productsData.find(product => product.id.toString() === id);
        if (foundProduct) {
            setProduct(foundProduct);
            setPrice(foundProduct.price); // Setting price here
        } else {
            // Handle case where product with given id is not found
            setProduct(null); // or handle error
        }
    }, [id]);

    useEffect(() => {
        if (!isUserAuthenticated) {
            navigateTo('/login');
        }
    }, [isUserAuthenticated]);

    if (!product) {
        return <div>Loading...</div>; // or handle loading state
    }

    const buyShoe = async (e) => {
        e.preventDefault();
        const { contract } = state;

        const amount = { value: ethers.utils.parseEther(price) }; // Correcting the price usage
        const transaction = await contract.buyShoe(message, price, amount);
        await transaction.wait();
        toast.success("Transaction is successful");
        window.location.reload();
    };

    return (
        <div>
            <div className="flex justify-center items-center min-h-screen pt-20  px-20 bg-black">
                <div className="max-w-4xl w-full mx-auto p-4 bg-gray-900 rounded-lg shadow-lg">
                    <motion.img
                        src={`${product.image}`}
                        alt="Product Image"
                        className="mx-auto rounded-lg mb-4"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                    />
                    <h2 className="text-gray-50 text-4xl font-bold text-center mb-4">{product.name}</h2>
                    <p className="text-gray-100 text-xl font-semibold mb-2">Brand: {product.brand}</p>
                    <p className="text-gray-200 text-xl font-semibold mb-2">Price: Eth {product.price}</p>
                    <p className="text-gray-200 font-semibold mb-2">Sizes Available: {product.sizes.join(', ')}</p>
                    <p className="text-gray-200 font-semibold mb-2">Colors Available: {product.colors}</p>
                    <p className="text-gray-200 font-semibold mb-2">Description: {product.description}</p>
                </div>

            </div>
            <div className=" bg-black flex  justify-center">
                <form onSubmit={buyShoe}>
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter message"
                        className="px-4 py-2 mb-2 text-black  rounded"
                    />
                    <button className="px-4 mx-2 py-2 bg-green-500 text-white rounded hover:bg-green-600" type="submit">Pay</button>
                </form>
            </div>
        </div>
    );
}

export default Cart;
