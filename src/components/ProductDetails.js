import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../pages/CartContext"; 
import { AiOutlineCheckCircle } from "react-icons/ai";
import { CamisetaAmerica, CamisetaCali, CamisetaNacional, CamisetaPortugal,
CamisetaPereira, CamisetaTolima, CamisetaRealMadrid, CamisetaBarcelona, ChaquetaColombia,
ChaquetaMillonarios, ChaquetaSantae} from '../assets';

const formatCurrency = (value) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0
  }).format(value);
};

const productos = [
  {
    id: "1",
    name: "Camiseta de Fútbol Del America",
    price: 80000,
    description: "Camiseta-Jersey de Futbol. Liga Betplay Equipo: America de Cali. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: CamisetaAmerica
  },
  {
    id: "2",
    name: "Camiseta De Fútbol Del Cali",
    price: 80000,
    description: "Camiseta-Jersey de Futbol. Liga Betplay Equipo: Cali. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: CamisetaCali
  },
  {
    id: "3",
    name: "Camiseta De Fútbol Del Atletico Nacional",
    price: 80000,
    description: "Camiseta-Jersey de Futbol. Liga Betplay Equipo: Atletico Nacional. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: CamisetaNacional
  },
  {
    id: "4",
    name: "Camiseta De Fútbol Del Pereira",
    price: 65000,
    description: "Camiseta-Jersey de Futbol. Liga Betplay Equipo: Pereira. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: CamisetaPereira
  },
  {
    id: "5",
    name: "Camiseta De Fútbol Del Tolima",
    price: 80000,
    description: "Camiseta-Jersey de Futbol. Liga Betplay Equipo: Tolima. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: CamisetaTolima
  },
  {
    id: "6",
    name: "Camiseta De Fútbol Del Portugal",
    price: 80000,
    description: "Camiseta-Jersey de Futbol. Pais: Portugal. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: CamisetaPortugal
  },
  {
    id: "7",
    name: "Camiseta De Fútbol Del Real Madrid",
    price: 80000,
    description: "Camiseta-Jersey de Futbol. LaLiga Equipo: Real Madrid. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: CamisetaRealMadrid
  },
  {
    id: "8",
    name: "Camiseta De Fútbol Del Barcelona",
    price: 80000,
    description: "Camiseta-Jersey de Futbol. LaLiga Equipo: Barcelona. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: CamisetaBarcelona
  },
  {
    id: "9",
    name: "Chaqueta De La Seleccion Colombia",
    price: 120000,
    description: "Chaqueta de Futbol. Pais: Colombia. Chaqueta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: ChaquetaColombia
  },
  {
    id: "10",
    name: "Chaqueta Del Millonarios",
    price: 120000,
    description: "Chaqueta Del Millonarios",
    category: "Hombre",
    image: ChaquetaMillonarios
  },
  {
    id: "11",
    name: "Chaqueta Del Santa Fe",
    price: 120000,
    description: "Chaqueta de Futbol. Liga Betplay Equipo: Santa Fe. Chaqueta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: ChaquetaSantae
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); 
  const [showConfirmation, setShowConfirmation] = useState(false);

  const product = productos.find((prod) => prod.id === id);

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    setShowConfirmation(true);
    
    
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000); 
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="container mx-auto px-4 py-8 flex gap-10">
      <div className="w-1/3 relative max-h-100">
        <img className="w-full h-full object-cover rounded-lg max-h-100" src={product.image} alt={product.name} />
        {product.oldPrice && (
          <span className="absolute top-0 left-0 bg-black text-white px-2 py-1 text-sm font-semibold">
            Sale
          </span>
        )}
      </div>
      <div className="w-2/3">
        <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
        {product.oldPrice && <p className="text-gray-500 line-through">{formatCurrency(product.oldPrice)}</p>}
        <p className="text-2xl font-semibold text-blue-700">{formatCurrency(product.price)}</p>
        <p className="mt-4 text-gray-600">{product.description}</p>
        <div className="mt-4">
          <label className="font-bold">Cantidad</label>
          <input type="number" className="border ml-2 p-1 w-16 text-center" defaultValue={1} min={1} />
          <button
            onClick={handleAddToCart} 
            className="ml-4 bg-blue-700 text-white px-4 py-2"
          >
            Añadir al Carro
          </button>
        </div>
        <p className="mt-6 text-gray-700">
          Categoria: <span className="font-semibold">{product.category}</span>
        </p>
      </div>
      {showConfirmation && (
        <div
          className="fixed top-4 right-4 bg-white text-gray-800 border border-blue-200 rounded-lg shadow-lg p-4 z-50 transition-transform transform translate-x-0 opacity-95"
          style={{
            maxWidth: "300px",
            transition: "transform 0.5s ease-in-out",
            animation: "slideIn 0.5s forwards",
          }}
        >
          <div className="flex items-center">
            <AiOutlineCheckCircle className="text-green-500 text-2xl mr-2" />
            <p className="font-semibold">¡Producto añadido al carrito!</p>
          </div>
          <p className="mt-2 text-sm text-gray-600">Continúa explorando o revisa tu carrito.</p>
          <button
            onClick={handleGoToCart}
            className="mt-4 bg-blue-600 text-white px-3 py-1 rounded w-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Ver Carrito
          </button>
          <button
            onClick={() => setShowConfirmation(false)}
            className="mt-2 bg-gray-200 text-gray-700 px-3 py-1 rounded w-full hover:bg-gray-300 transition-colors"
          >
            Cerrar
          </button>
        </div>
      )}
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ProductDetails;