import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../pages/CartContext"; // Importa el contexto de carrito
import { AiOutlineCheckCircle } from "react-icons/ai"; // Importa el icono de confirmación

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
    image: "https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/466786082_474318559098721_2139661008219257597_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xRdA39o6lqQQ7kNvgHEymXv&_nc_zt=23&_nc_ht=scontent.fclo1-4.fna&_nc_gid=AlNbdMDST5xAKQNqzPswKlU&oh=00_AYDQSzBeK8uEWmF2PLAqCJwY-iHzU8mzP5y0VijvP_64ig&oe=673ADD29"
  },
  {
    id: "2",
    name: "Camiseta De Fútbol Del Cali",
    price: 80000,
    description: "Camiseta-Jersey de Futbol. Liga Betplay Equipo: Cali. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: "https://scontent.fclo1-3.fna.fbcdn.net/v/t39.30808-6/466594788_474318572432053_1161897252977262629_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ql4mHNUfVNIQ7kNvgG6uWx4&_nc_zt=23&_nc_ht=scontent.fclo1-3.fna&_nc_gid=A75flh7QdQiIn5wxoHPt7_L&oh=00_AYDiZ1ssaXBm3S4thWQlJDRqa9ctfkEWg7qLYnoEGLCHnQ&oe=673AE684"
  },
  {
    id: "3",
    name: "Camiseta De Fútbol Del Atletico Nacional",
    price: 80000,
    description: "Camiseta-Jersey de Futbol. Liga Betplay Equipo: Atletico Nacional. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: "https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/467113853_474318702432040_4443163251354758925_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=g6NbKrOFFhMQ7kNvgHLFe0s&_nc_zt=23&_nc_ht=scontent.fclo1-4.fna&_nc_gid=AKyJKcH1e4MZHou2Yunm9__&oh=00_AYDrxWy7UXWvqP3ccPSWWmWtNQCeWGq2-ePF1hQyYrswmw&oe=673AE327",
  },
  {
    id: "4",
    name: "Camiseta De Fútbol Del Pereira",
    price: 65000,
    description: "Camiseta-Jersey de Futbol. Liga Betplay Equipo: Pereira. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: "https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/466622669_474318709098706_2974306175760168072_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-R-3sxTBu5UQ7kNvgFz7cFK&_nc_zt=23&_nc_ht=scontent.fclo1-4.fna&_nc_gid=A6CKDDWHja6D2hmBLaWOtHf&oh=00_AYCe_aOuaZDaNfhjjs86h0oINfHOL7TfoLou4ShobiWVNA&oe=673AF95C",
  },
  {
    id: "5",
    name: "Camiseta De Fútbol Del Tolima",
    price: 80000,
    description: "Camiseta-Jersey de Futbol. Liga Betplay Equipo: Tolima. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: "https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/466665587_474318839098693_7309476236803030733_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tCxE7E4GT1kQ7kNvgHAJy6S&_nc_zt=23&_nc_ht=scontent.fclo1-4.fna&_nc_gid=ABndujtKDgeVEPb54EHLsj0&oh=00_AYDB3rwNapcUsemyTbKVpiFPQMCLekfegasEgPAW2fiu0w&oe=673ACD0B",
  },
  {
    id: "6",
    name: "Camiseta De Fútbol Del Portugal",
    price: 80000,
    description: "Camiseta-Jersey de Futbol. Pais: Portugal. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: "https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/467022941_474318809098696_4361975384019639072_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UZA7k4kQzKMQ7kNvgHBGDL7&_nc_zt=23&_nc_ht=scontent.fclo1-4.fna&_nc_gid=AjId0ZDpPebyXEKkSwqKGnr&oh=00_AYBxJnuC9wvCpM4IXSvVIAkkK-y_t7RISg48WmZjNpI7UA&oe=673AE906",
  },
  {
    id: "7",
    name: "Camiseta De Fútbol Del Real Madrid",
    price: 80000,
    description: "Camiseta-Jersey de Futbol. LaLiga Equipo: Real Madrid. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: "https://scontent.fclo1-3.fna.fbcdn.net/v/t39.30808-6/466783768_474318842432026_3031464179095372952_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8YGOPMfrmV4Q7kNvgHD6nS1&_nc_zt=23&_nc_ht=scontent.fclo1-3.fna&_nc_gid=AhZU9XOBMRphr-EDMdbIv-k&oh=00_AYCW34KepjkmIrBXPc_ytoBT31WEBHYYB_o-XZMk7SoWPg&oe=673AFBC1",
  },
  {
    id: "8",
    name: "Camiseta De Fútbol Del Barcelona",
    price: 80000,
    description: "Camiseta-Jersey de Futbol. LaLiga Equipo: Barcelona. Camiseta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: "https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/466868333_474318569098720_5305520534588146198_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=x6-F8_wEg4IQ7kNvgGU-h75&_nc_zt=23&_nc_ht=scontent.fclo1-4.fna&_nc_gid=AjRQnq4wz7opths_II68Ppy&oh=00_AYC361iwxkAQH23Rj-i8xwpvSKYkOc3jWU534t427vG_FQ&oe=673AC77D",
  },
  {
    id: "9",
    name: "Chaqueta De La Seleccion Colombia",
    price: 120000,
    description: "Chaqueta de Futbol. Pais: Colombia. Chaqueta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: "https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/466682716_474318925765351_8821086284704697741_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XYtruyBRRFQQ7kNvgGML4Cg&_nc_zt=23&_nc_ht=scontent.fclo1-4.fna&_nc_gid=A7QMajUjDDYtwoKvPRj3UZu&oh=00_AYBEZMaSchxcxnJa3Uxih6KzONwW-FJG7leXYnMlVBYz1w&oe=673AF43F",
  },
  {
    id: "10",
    name: "Chaqueta Del Millonarios",
    price: 120000,
    description: "Chaqueta Del Millonarios",
    category: "Hombre",
    image: "https://scontent.fclo1-3.fna.fbcdn.net/v/t39.30808-6/467124663_474318935765350_4681682092102574405_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NoqRNabBkHMQ7kNvgGErd73&_nc_zt=23&_nc_ht=scontent.fclo1-3.fna&_nc_gid=A2dYnm-9nM99V6GU-hUyswO&oh=00_AYAfa3iBjDF6rN3sA-PvWKuXQqetDugDmCEez7wf7HPlcA&oe=673AFBAB",
  },
  {
    id: "11",
    name: "Chaqueta Del Santa Fe",
    price: 120000,
    description: "Chaqueta de Futbol. Liga Betplay Equipo: Santa Fe. Chaqueta AAA Buena Calidad. Tallas Disponibles: L-M",
    category: "Hombre",
    image: "https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/466874157_474318705765373_5745061728789218928_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1M9VflbUkZgQ7kNvgHmoJhW&_nc_zt=23&_nc_ht=scontent.fclo1-4.fna&_nc_gid=AEXwUiGSF06OCITBCHgI5N2&oh=00_AYA1Ag8ZNeGkdTczMdUIoGwcd2CRodYNyBHWrVJdPl4lFA&oe=673AE406",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Usa el hook del contexto de carrito
  const [showConfirmation, setShowConfirmation] = useState(false);

  const product = productos.find((prod) => prod.id === id);

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    setShowConfirmation(true);
    
    // Configura el temporizador para ocultar el anuncio después de 3 segundos
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000); // 3000 ms = 3 segundos
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
            onClick={handleAddToCart} // Añade el evento onClick para agregar al carrito
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