import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    
  return (
    <div className="bg-gray-900 hover:bg-gray-800 p-4 mr-0.5 mb-4 rounded-lg">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-t-lg" />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-400">{product.brand}</p>
        <p className="text-lg font-bold mt-2">${product.price}</p>
        <p className="text-md font-semibold mt-2">Size: {product.sizes.join(', ')}</p>
        <p className="text-md font-semibold mt-1">Available Color: {product.colors}</p>
        <Link to={`/collection/${product.id}`}>
                      {" "}
                      <button className="bg-blue-700 hover:bg-orange-500 text-white font-bold py-2 px-4 mb-8 rounded mt-2">
                        Buy Now
                      </button>
                    </Link>
        {/* <p className="text-sm font-semibold mt-1">Desciption:{product.description}</p> */}
      </div>
    </div>
  );
}

export default ProductCard;
