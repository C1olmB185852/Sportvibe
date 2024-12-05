import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useCart } from "../pages/CartContext";
import { AiOutlineCheckCircle } from "react-icons/ai";

import {
  CamisetaAmerica,
  CamisetaCali,
  CamisetaNacional,
  CamisetaPortugal,
  CamisetaPereira,
  CamisetaTolima,
  CamisetaRealMadrid,
  CamisetaBarcelona,
  ChaquetaColombia,
  ChaquetaMillonarios,
  ChaquetaSantae,
} from "../assets";

const formatCurrency = (value) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(value);

const productos = [
  {
    id: "1",
    name: "Camiseta de Fútbol Del America",
    price: 80000,
    description:
      "Camiseta-Jersey de Futbol. Liga Betplay Equipo: America de Cali. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: CamisetaAmerica,
  },
  {
    id: "2",
    name: "Camiseta De Fútbol Del Cali",
    price: 80000,
    description:
      "Camiseta-Jersey de Futbol. Liga Betplay Equipo: Cali. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: CamisetaCali,
  },
  {
    id: "3",
    name: "Camiseta De Fútbol Del Atletico Nacional",
    price: 80000,
    description:
      "Camiseta-Jersey de Futbol. Liga Betplay Equipo: Atletico Nacional. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: CamisetaNacional,
  },
  {
    id: "4",
    name: "Camiseta De Fútbol Del Pereira",
    price: 65000,
    description:
      "Camiseta-Jersey de Futbol. Liga Betplay Equipo: Pereira. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: CamisetaPereira,
  },
  {
    id: "5",
    name: "Camiseta De Fútbol Del Tolima",
    price: 80000,
    description:
      "Camiseta-Jersey de Futbol. Liga Betplay Equipo: Tolima. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: CamisetaTolima,
  },
  {
    id: "6",
    name: "Camiseta De Fútbol Del Portugal",
    price: 80000,
    description:
      "Camiseta-Jersey de Futbol. Pais: Portugal. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: CamisetaPortugal,
  },
  {
    id: "7",
    name: "Camiseta De Fútbol Del Real Madrid",
    price: 80000,
    description:
      "Camiseta-Jersey de Futbol. LaLiga Equipo: Real Madrid. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: CamisetaRealMadrid,
  },
  {
    id: "8",
    name: "Camiseta De Fútbol Del Barcelona",
    price: 80000,
    description:
      "Camiseta-Jersey de Futbol. LaLiga Equipo: Barcelona. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: CamisetaBarcelona,
  },
  {
    id: "9",
    name: "Chaqueta De La Seleccion Colombia",
    price: 120000,
    description:
      "Chaqueta de Futbol. Pais: Colombia. Chaqueta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: ChaquetaColombia,
  },
  {
    id: "10",
    name: "Chaqueta Del Millonarios",
    price: 120000,
    description: "Chaqueta Del Millonarios",
    category: "Hombre",
    image: ChaquetaMillonarios,
  },
  {
    id: "11",
    name: "Chaqueta Del Santa Fe",
    price: 120000,
    description:
      "Chaqueta de Futbol. Liga Betplay Equipo: Santa Fe. Chaqueta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: ChaquetaSantae,
  },

];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const product = productos.find((prod) => prod.id === id);

  if (!product) {
    return (
      <div className="text-center py-16">
        <p className="text-lg text-gray-700">Producto no encontrado.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Volver al Inicio
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  const handleGoToCart = () => navigate("/cart");

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-10">
      <div className="w-full md:w-1/3">
        <img
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="w-full md:w-2/3">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h2>
        <p className="text-xl font-semibold text-blue-700 mb-4">
          {formatCurrency(product.price)}
        </p>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-gray-800">
          Categoría:{" "}
          <span className="font-medium text-blue-600">{product.category}</span>
        </p>

        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Añadir al Carro
          </button>
          <button
            onClick={handleGoToCart}
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300 transition"
          >
            Ver Carrito
          </button>
        </div>
      </div>

      {showConfirmation && (
        <div
          className="fixed top-4 right-4 bg-white border border-blue-200 rounded-lg shadow-lg p-4 z-50 animate-slide-in"
          role="alert"
        >
          <div className="flex items-center gap-2">
            <AiOutlineCheckCircle className="text-green-500 text-2xl" />
            <p className="text-gray-800 font-semibold">
              ¡Producto añadido al carrito!
            </p>
          </div>
          <button
            onClick={() => setShowConfirmation(false)}
            className="mt-4 bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition w-full"
          >
            Cerrar
          </button>
        </div>
      )}

      <style>
        {`
          @keyframes slide-in {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-slide-in {
            animation: slide-in 0.3s ease-out;
          }
        `}
      </style>
    </div>
  );
};

ProductDetails.propTypes = {
  id: PropTypes.string,
};

export default ProductDetails;
