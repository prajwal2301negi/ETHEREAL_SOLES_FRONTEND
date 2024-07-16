// import React, { useState } from 'react';

// function FilterSidebar() {
//     const [selectedFilters, setSelectedFilters] = useState({
//         color: [],
//         price: [],
//         brand: [],
//         name: []
//     });

//     const applyFilters = () => {
//         console.log("Filters Applied:", selectedFilters);
//     };

//     const handleFilterSelect = (category, option) => {
//         // Toggle selection (add/remove from array)
//         const isSelected = selectedFilters[category].includes(option);
//         if (isSelected) {
//             setSelectedFilters(prevFilters => ({
//                 ...prevFilters,
//                 [category]: prevFilters[category].filter(item => item !== option)
//             }));
//         } else {
//             setSelectedFilters(prevFilters => ({
//                 ...prevFilters,
//                 [category]: [...prevFilters[category], option]
//             }));
//         }
//     };

//     return (
//         <div className="bg-black p-4 w-64 text-white">
//             <h2 className="text-lg font-bold">Now Showing</h2>

//             {/* Color Filters */}
//             <div className="mt-4">
//                 <h3 className="font-semibold">Color</h3>
//                 <div className=" flex flex-col space-y-2 mt-2">
//                     <button
//                         className={`px-3 py-1 rounded-lg ${selectedFilters.color.includes('black') ? 'bg-gray-600' : 'bg-gray-800'}`}
//                         onClick={() => handleFilterSelect('color', 'black')}
//                     >
//                         Black
//                     </button>
//                     <button
//                         className={`px-3 py-1 rounded-lg ${selectedFilters.color.includes('white') ? 'bg-gray-600' : 'bg-gray-800'}`}
//                         onClick={() => handleFilterSelect('color', 'white')}
//                     >
//                         White
//                     </button>
//                     <button
//                         className={`px-3 py-1 rounded-lg ${selectedFilters.color.includes('white') ? 'bg-gray-600' : 'bg-gray-800'}`}
//                         onClick={() => handleFilterSelect('color', 'red')}
//                     >
//                         Red
//                     </button>
//                     <button
//                         className={`px-3 py-1 rounded-lg ${selectedFilters.color.includes('white') ? 'bg-gray-600' : 'bg-gray-800'}`}
//                         onClick={() => handleFilterSelect('color', 'blue')}
//                     >
//                         Blue
//                     </button>
//                     <button
//                         className={`px-3 py-1 rounded-lg ${selectedFilters.color.includes('white') ? 'bg-gray-600' : 'bg-gray-800'}`}
//                         onClick={() => handleFilterSelect('color', 'green')}
//                     >
//                         Green
//                     </button>
//                     <button
//                         className={`px-3 py-1 rounded-lg ${selectedFilters.color.includes('white') ? 'bg-gray-600' : 'bg-gray-800'}`}
//                         onClick={() => handleFilterSelect('color', 'grey')}
//                     >
//                         Grey
//                     </button>

//                 </div>
//             </div>

//             {/* Price Filters */}
//             <div className="mt-4">
//                 <h3 className="font-semibold">Price</h3>
//                 <div className=" space-x-2 mt-2">
//                     <button
//                         className={`px-3 py-1 rounded-lg ${selectedFilters.price.includes(50) ? 'bg-gray-600' : 'bg-gray-800'}`}
//                         onClick={() => handleFilterSelect('price', 50)}
//                     >
//                         50
//                     </button>
//                     <button
//                         className={`px-3 py-1 rounded-lg ${selectedFilters.price.includes(100) ? 'bg-gray-600' : 'bg-gray-800'}`}
//                         onClick={() => handleFilterSelect('price', 100)}
//                     >
//                         100
//                     </button>
//                     <button
//                         className={`px-3 py-1 rounded-lg ${selectedFilters.price.includes(100) ? 'bg-gray-600' : 'bg-gray-800'}`}
//                         onClick={() => handleFilterSelect('price', 100)}
//                     >
//                         120
//                     </button>
        
//                 </div>
//             </div>

//             {/* Brand Filters */}
//             <div className="mt-4">
//                 <h3 className="font-semibold">Brand</h3>
//                 <div className="flex flex-col space-y-2 mt-2">
//                     <button
//                         className={`px-3 py-1 rounded-lg ${selectedFilters.brand.includes('Nike') ? 'bg-gray-600' : 'bg-gray-800'}`}
//                         onClick={() => handleFilterSelect('brand', 'Nike')}
//                     >
//                         Nike
//                     </button>
//                     <button
//                         className={`px-3 py-1 rounded-lg ${selectedFilters.brand.includes('Adidas') ? 'bg-gray-600' : 'bg-gray-800'}`}
//                         onClick={() => handleFilterSelect('brand', 'Adidas')}
//                     >
//                         Adidas
//                     </button>
//                     <button
//                         className={`px-3 py-1 rounded-lg ${selectedFilters.brand.includes('Adidas') ? 'bg-gray-600' : 'bg-gray-800'}`}
//                         onClick={() => handleFilterSelect('brand', 'Reebok')}
//                     >
//                         Reebok
//                     </button>
//                     <button
//                         className={`px-3 py-1 rounded-lg ${selectedFilters.brand.includes('Adidas') ? 'bg-gray-600' : 'bg-gray-800'}`}
//                         onClick={() => handleFilterSelect('brand', 'Vans')}
//                     >
//                         Vans
//                     </button>
//                     <button
//                         className={`px-3 py-1 rounded-lg ${selectedFilters.brand.includes('Adidas') ? 'bg-gray-600' : 'bg-gray-800'}`}
//                         onClick={() => handleFilterSelect('brand', 'Puma')}
//                     >
//                         Puma
//                     </button>
//                     <button
//                         className={`px-3 py-1 rounded-lg ${selectedFilters.brand.includes('Adidas') ? 'bg-gray-600' : 'bg-gray-800'}`}
//                         onClick={() => handleFilterSelect('brand', 'Converse')}
//                     >
//                         Converse
//                     </button>
//                     <button
//                         className={`px-3 py-1 rounded-lg ${selectedFilters.brand.includes('Adidas') ? 'bg-gray-600' : 'bg-gray-800'}`}
//                         onClick={() => handleFilterSelect('brand', 'New_Balance')}
//                     >
//                         New Balance
//                     </button>
                
//                 </div>
//             </div>


//             {/* Apply Filters Button */}
//             <div className="mt-4">
//                 <button
//                     className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
//                     onClick={applyFilters}
//                 >
//                     Apply Filters
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default FilterSidebar;
import React, { useState } from 'react';

function FilterSidebar({ setFilters }) {
    const [selectedFilters, setSelectedFilters] = useState({
        colors: [],
        price: [],
        brand: [],
    });

    const clearFilters = () => {
        setSelectedFilters({
            colors: [],
            price: [],
            brand: [],
        });
        setFilters({
            colors: [],
            price: [],
            brand: [],
        });
    };

    const applyFilters = () => {
        setFilters(selectedFilters);
    };

    const handleFilterSelect = (category, option) => {
        // Toggle selection (add/remove from array)
        const isSelected = selectedFilters[category].includes(option);
        if (isSelected) {
            setSelectedFilters(prevFilters => ({
                ...prevFilters,
                [category]: prevFilters[category].filter(item => item !== option)
            }));
        } else {
            setSelectedFilters(prevFilters => ({
                ...prevFilters,
                [category]: [...prevFilters[category], option]
            }));
        }
    };

    return (
        <div className="bg-black p-4 w-64 text-white">
            <h2 className="text-lg font-bold">Now Showing</h2>

            {/* Color Filters */}
            <div className="mt-4">
                <h3 className="font-semibold">Color</h3>
                <div className="flex flex-col space-y-2 mt-2">
                    {['black', 'white', 'red', 'blue', 'green', 'grey'].map(color => (
                        <button
                            key={color}
                            className={`px-3 py-1 rounded-lg ${selectedFilters.colors.includes(color) ? 'bg-gray-600' : 'bg-gray-800'}`}
                            onClick={() => handleFilterSelect('colors', color)}
                        >
                            {color.charAt(0).toUpperCase() + color.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Price Filters */}
            <div className="mt-4">
                <h3 className="font-semibold">Price</h3>
                <div className="flex flex-col space-y-2 mt-2">
                    {[50, 100, 120].map(price => (
                        <button
                            key={price}
                            className={`px-3 py-1 rounded-lg ${selectedFilters.price.includes(price) ? 'bg-gray-600' : 'bg-gray-800'}`}
                            onClick={() => handleFilterSelect('price', price)}
                        >
                            {price}
                        </button>
                    ))}
                </div>
            </div>

            {/* Brand Filters */}
            <div className="mt-4">
                <h3 className="font-semibold">Brand</h3>
                <div className="flex flex-col space-y-2 mt-2">
                    {['Nike', 'Adidas', 'Reebok', 'Vans', 'Puma', 'Converse', 'New Balance'].map(brand => (
                        <button
                            key={brand}
                            className={`px-3 py-1 rounded-lg ${selectedFilters.brand.includes(brand) ? 'bg-gray-600' : 'bg-gray-800'}`}
                            onClick={() => handleFilterSelect('brand', brand)}
                        >
                            {brand}
                        </button>
                    ))}
                </div>
            </div>

            {/* Apply Filters Button */}
            <div className="mt-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                    onClick={applyFilters}
                >
                    Apply Filters
                </button>
            </div>

            {/* Clear Filters Button */}
            <div className="mt-2">
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                    onClick={clearFilters}
                >
                    Clear Filters
                </button>
            </div>

        </div>
    );
}

export default FilterSidebar;
