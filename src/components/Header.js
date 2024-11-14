import React from 'react';
import { useNavigate } from 'react-router-dom'; // Asegúrate de tener React Router configurado
import { logoCarrito } from '../assets';

const Header = () => {
    const navigate = useNavigate();

    // Función para manejar el clic en el icono del carrito
    const handleCartClick = () => {
        navigate('/cart'); // Redirige a la ruta del carrito
    };

    return (
        <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50'>
            <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
                <div>
                    <h1 className='text-2xl text-blue-600 font-semibold text-center'>Sportvibe</h1>
                </div>
                <div className='flex items-center gap-8'>
                    <ul className='flex items-center gap-8'>
                        <li className='text-black hover:text-blue-500 underline-offset-2 decoration-[2px] cursor-pointer'>Inicio</li>
                        <li className='text-black hover:text-blue-500 underline-offset-2 decoration-[2px] cursor-pointer'>Nosotros</li>
                        <li className='text-black hover:text-blue-500 underline-offset-2 decoration-[2px] cursor-pointer'>Soporte</li>
                    </ul>
                </div>
                <div className='relative'>
                    <img 
                        className='w-7 cursor-pointer' 
                        src={logoCarrito} 
                        alt='cartImg' 
                        onClick={handleCartClick} // Agrega el evento onClick
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
