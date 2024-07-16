import React, { useState } from 'react';
import FilterSidebar from '../Components/Collection/FilterSidebar';
import ProductCard from '../Components/Collection/ProductCard';
import { products } from '../data.json';
import { Link } from 'react-router-dom';

function Collection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    colors: [],
    price: [],
    brand: [],
  });

  const shoesPerPage = 20;

  // Filter products based on selected filters
  const filteredProducts = products.filter(product => {
    const matchColor = filters.colors.length === 0 || filters.colors.includes(product.colors);
    const matchPrice = filters.price.length === 0 || filters.price.includes(product.price);
    const matchBrand = filters.brand.length === 0 || filters.brand.includes(product.brand);
    return matchColor && matchPrice && matchBrand;
  });

  // Calculate indexes for pagination
  const indexOfLastShoe = currentPage * shoesPerPage;
  const indexOfFirstShoe = indexOfLastShoe - shoesPerPage;
  const currentShoes = filteredProducts.slice(indexOfFirstShoe, indexOfLastShoe);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(filteredProducts.length / shoesPerPage)) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-black text-white">
      <FilterSidebar setFilters={setFilters} />
      <div className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {currentShoes.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-4 mb-4">
          <Pagination
            itemsPerPage={shoesPerPage}
            totalItems={filteredProducts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
}

// Example Pagination component
const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex items-center space-x-2">
      <button
        onClick={() => paginate(currentPage - 1)}
        className={`px-4 py-2 bg-gray-800 text-white rounded ${currentPage === 1 ? 'disabled:opacity-50' : ''}`}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <ul className="flex space-x-2">
        {pageNumbers.map((number) => (
          <li key={number} className={number === currentPage ? 'active' : ''}>
            <button
              onClick={() => paginate(number)}
              className={`px-4 py-2 ${number === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-800 text-white'} rounded`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => paginate(currentPage + 1)}
        className={`px-4 py-2 bg-gray-800 text-white rounded ${currentPage === pageNumbers.length ? 'disabled:opacity-50' : ''}`}
        disabled={currentPage === pageNumbers.length}
      >
        Next
      </button>
    </nav>
  );
};

export default Collection;
