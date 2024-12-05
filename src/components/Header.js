import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoCarrito } from "../assets";
import { AiOutlineHome, AiOutlineLogin } from "react-icons/ai";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigateToHome = () => {
    navigate("/"); // Redirige a la página principal
  };

  const handleCartClick = () => {
    navigate("/cart"); // Redirige al carrito
  };

  return (
    <div className="w-full h-20 bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <h1
          className="text-xl sm:text-2xl text-blue-600 font-bold cursor-pointer"
          onClick={handleNavigateToHome}
        >
          Sportvibe
        </h1>

        {/* Menú desktop */}
        <ul className="hidden lg:flex items-center gap-8">
          <li
            className="flex items-center gap-2 text-black hover:text-blue-500 cursor-pointer"
            onClick={handleNavigateToHome}
          >
            <AiOutlineHome className="text-lg" />
            Inicio
          </li>
          <li
            className="flex items-center gap-2 text-black hover:text-blue-500 cursor-pointer"
            onClick={() => navigate("/login")} // Cambiar a la ruta de iniciar sesión
          >
            <AiOutlineLogin className="text-lg" />
            Iniciar Sesión
          </li>
        </ul>

        {/* Carrito */}
        <div>
          <img
            className="w-7 cursor-pointer"
            src={logoCarrito}
            alt="cartImg"
            onClick={handleCartClick}
          />
        </div>

        {/* Botón hamburguesa */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black hover:text-blue-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 transition-transform transform duration-300 ease-in-out">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li
              className="flex items-center gap-2 text-black hover:text-blue-500 cursor-pointer"
              onClick={() => {
                handleNavigateToHome();
                setMenuOpen(false);
              }}
            >
              <AiOutlineHome />
              Inicio
            </li>
            <li
              className="flex items-center gap-2 text-black hover:text-blue-500 cursor-pointer"
              onClick={() => {
                navigate("/login");
                setMenuOpen(false);
              }}
            >
              <AiOutlineLogin />
              Iniciar Sesión
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
