import React, { useState } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

const Banner = () => {
    const data = [
        "https://scontent.feoh4-3.fna.fbcdn.net/v/t39.30808-6/466867434_474158849114692_1544949385378048228_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-OKWiDrnL1MQ7kNvgFcKEku&_nc_zt=23&_nc_ht=scontent.feoh4-3.fna&_nc_gid=AzACK1fnL97Bqoll1SAo8H5&oh=00_AYDf_kHJFDtET2Ua_3iulXm5c8cJ_tytIbnyEHiUGoy-dw&oe=673ABF34",
        "https://scontent.feoh4-3.fna.fbcdn.net/v/t39.30808-6/467022457_474159949114582_1656717062499265874_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ztwRunG5CLIQ7kNvgHlw3KB&_nc_zt=23&_nc_ht=scontent.feoh4-3.fna&_nc_gid=As0Z2iqfE078uFVxIwGU9c-&oh=00_AYAS8xv8fgE7HjXrE2XyA0MXgl-zxa7glO-RT898muzZ6A&oe=673A9FDD",
        "https://scontent.feoh4-4.fna.fbcdn.net/v/t39.30808-6/466786117_474173319113245_4511159434919550672_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=O6W7r1STX7EQ7kNvgEem4xR&_nc_zt=23&_nc_ht=scontent.feoh4-4.fna&_nc_gid=Apw5vpn1kytNA7APV4c4Ov0&oh=00_AYDTkuUm_PFTOC9qM5kRY6GJ-yzHC4y8Zsto-jYrw8qrBQ&oe=673A95B0"
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className='w-full h-auto overflow-x-hidden'>
            <div className='w-screen h-[650px] relative'>
                <div
                    className='w-[300vw] h-full flex transition-transform duration-500'
                    style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
                >
                    {data.map((image, index) => (
                        <img
                            key={index}
                            className='w-screen h-full object-cover'
                            src={image}
                            alt={`Banner ${index + 1}`}
                            loading='priority'
                        />
                    ))}
                </div>
                <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-[20px]'>
    <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
        <HiArrowLeft />
    </div>
    <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
        <HiArrowRight />
    </div>
</div>

            </div>
        </div>
    );
};

export default Banner;

