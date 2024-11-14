// src/components/ProductsCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductsCard = ({ products }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
          onClick={() => navigate(`/product/${product.id}`)} 
        >
          <img className="w-full h-72 object-cover" src={product.image} alt={product.name} />
          <div className="p-4">
            <h2 className="text-gray-800 font-bold text-lg">{product.name}</h2>
            <p className="text-gray-500 mt-2">${product.price.toLocaleString('es-CO')}</p>
            <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
              Ver
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsCard;
