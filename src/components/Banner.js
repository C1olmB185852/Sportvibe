import React, { useState } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { ligaEspañola, EquiposNacionales, ligaColombiana } from '../assets';

const Banner = () => {
    const data = [
        {
            image: ligaEspañola,
            alt: 'Liga Española - Imagen 1',
        },
        {
            image: ligaColombiana,
            alt: 'Liga Española - Imagen 2',
        },
        {
            image: EquiposNacionales,
            alt: 'Liga Española - Imagen 3',
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-full h-auto overflow-x-hidden">
            {/* Contenedor del banner */}
            <div className="w-screen h-[300px] sm:h-[500px] relative">
                {/* Contenedor deslizante */}
                <div
                    className="w-[300vw] h-full flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
                >
                    {data.map((item, index) => (
                        <img
                            key={index}
                            className="w-screen h-full object-cover"
                            src={item.image}
                            alt={item.alt}
                            loading={index === currentSlide ? 'eager' : 'lazy'} // Prioriza la imagen actual
                        />
                    ))}
                </div>

                {/* Controles de navegación */}
                <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-[20px]">
                    <div
                        onClick={prevSlide}
                        className="w-10 h-10 sm:w-14 sm:h-12 border border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300 rounded-full"
                    >
                        <HiArrowLeft size={20} />
                    </div>
                    <div
                        onClick={nextSlide}
                        className="w-10 h-10 sm:w-14 sm:h-12 border border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300 rounded-full"
                    >
                        <HiArrowRight size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
