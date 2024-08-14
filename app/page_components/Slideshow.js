import { useState, useEffect } from 'react';
import Image from 'next/image';

const Slideshow = ({ slides }) => {
    const [slideIndex, setSlideIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prev) => (prev % slides.length) + 1);
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, [slides.length]);

    const plusSlides = (n) => {
        setSlideIndex((prev) => (prev + n - 1 + slides.length) % slides.length + 1);
    };

    const currentSlide = (n) => {
        setSlideIndex(n);
    };

    return (
        <div className="relative max-w-4xl mx-auto overflow-hidden rounded-md shadow-md"> 
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`top-0 left-0 w-full h-60 ${index + 1 === slideIndex ? 'block' : 'hidden'} transition-opacity duration-1000 bg-blue-200`}
                >
                    <Image
                        src={slide.img}
                        alt={slide.caption}
                        width={1000}
                        height={600}
                        layout="responsive"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-10 left-0 w-full">
                        <div className="text-center p-4 bg-gradient-to-t from-black to-transparent text-white">{slide.caption}</div>
                    </div>
                </div>
            ))}
            <a
                className="absolute top-1/2 left-0 px-4 py-2 text-white bg-black bg-opacity-50 hover:bg-opacity-70 cursor-pointer z-100"
                onClick={() => plusSlides(-1)}
            >
                ❮
            </a>
            <a
                className="absolute top-1/2 right-0 px-4 py-2 text-white bg-black bg-opacity-50 hover:bg-opacity-70 cursor-pointer z-100" 
                onClick={() => plusSlides(1)}
            >
                ❯
            </a>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-100">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`cursor-pointer h-3 w-3 bg-gray-400 rounded-full ${index + 1 === slideIndex ? 'bg-gray-800' : ''}`}
                        onClick={() => currentSlide(index + 1)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;
