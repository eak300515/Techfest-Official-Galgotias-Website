import React from 'react';
import backgroundImage from './assets/hero-bg.jpeg';

function Hero() {
    return (
        <section className="relative flex items-center h-screen w-full bg-gray-900 text-white">
            {/* Left Side - Text Content with Background Image */}
            <div
                className="z-10 text-left px-8 h-full w-1/3 bg-cover bg-center pt-24" // Added pt-24 to push the text down
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                    Welcome to GU TechFest 2024
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-300">
                    TECH on the unforgettable tech fest experience with exhibitions, guest lectures, workshops, and more.
                </p>
                <button className="mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-lg font-semibold">
                    Explore the Event!
                </button>
            </div>

            {/* Right Side - Spline Embed */}
            <div className="w-2/3 h-full">
                <iframe
                    src="https://my.spline.design/interactivecubesexperiencesplinetutorialcopycopycopy-8ae5cb98a817a60b6995ae14ac6dfe60/"
                    style={{ width: "100%", height: "100%", border: "none" }}
                    title="3D Boxes Background"
                ></iframe>
            </div>
        </section>
    );
}

export default Hero;
