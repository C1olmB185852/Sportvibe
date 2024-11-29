import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoCarrito } from '../assets';

const Header = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleCartClick = () => {
        navigate('/cart');
    };

    return (
        <div className='w-full h-20 bg-white border-b border-gray-800 sticky top-0 z-50'>
            <div className='max-w-screen-xl h-full mx-auto px-4 flex items-center justify-between'>
                {/* Logo */}
                <h1 className='text-xl sm:text-2xl text-blue-600 font-semibold'>Sportvibe</h1>

                {/* Menú hamburguesa para móviles */}
                <div className='lg:hidden'>
                    <button 
                        onClick={() => setMenuOpen(!menuOpen)}
                        className='text-black hover:text-blue-500 focus:outline-none'
                    >
                        <svg
                            className='w-6 h-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            {menuOpen ? (
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M6 18L18 6M6 6l12 12'
                                />
                            ) : (
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M4 6h16M4 12h16M4 18h16'
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Menú para pantallas grandes */}
                <ul className={`hidden lg:flex items-center gap-8`}>
                    <li className='text-black hover:text-blue-500 underline-offset-2 decoration-[2px] cursor-pointer'>
                        Inicio
                    </li>
                    <li className='text-black hover:text-blue-500 underline-offset-2 decoration-[2px] cursor-pointer'>
                        Iniciar Sesión
                    </li>
                </ul>

                {/* Carrito */}
                <div className='relative'>
                    <img
                        className='w-7 cursor-pointer'
                        src={logoCarrito}
                        alt='cartImg'
                        onClick={handleCartClick}
                    />
                </div>
            </div>

            {/* Menú desplegable para móviles */}
            {menuOpen && (
                <div className='lg:hidden bg-white border-t border-gray-800'>
                    <ul className='flex flex-col items-center py-4 space-y-4'>
                        <li
                            className='text-black hover:text-blue-500 underline-offset-2 decoration-[2px] cursor-pointer'
                            onClick={() => setMenuOpen(false)}
                        >
                            Inicio
                        </li>
                        <li
                            className='text-black hover:text-blue-500 underline-offset-2 decoration-[2px] cursor-pointer'
                            onClick={() => setMenuOpen(false)}
                        >
                            Iniciar Sesión
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Header;
