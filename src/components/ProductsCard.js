import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductsCard = ({ products }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          {/* Imagen del producto */}
          <div className="relative">
            <img
              className="w-full h-72 object-cover"
              src={product.image}
              alt={product.name}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-60 transition-opacity duration-300"></div>
          </div>

          {/* Información del producto */}
          <div className="p-4">
            <h2 className="text-gray-800 font-semibold text-lg truncate">
              {product.name}
            </h2>
            <p className="text-gray-500 mt-1">${product.price.toLocaleString('es-CO')}</p>

            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all">
              Ver detalles
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsCard;
