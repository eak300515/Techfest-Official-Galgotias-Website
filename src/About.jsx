import React from 'react';
import backgroundImage from './assets/about-bg.avif';

function About() {
    return (
        <section
            className="bg-gray-100 bg-cover bg-center py-16 text-purple-800 font-semibold"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="container mx-auto px-4 text-center bg-gray-100 bg-opacity-80 py-8 rounded-lg">
                <h2 className="text-4xl font-bold mb-4"style={{ fontFamily: "'Rubik Wet Paint', cursive" }}>About DRAX 2024</h2>
                <p className="text-lg mb-8 max-w-3xl mx-auto" style={{ fontFamily: "'Press start 2P', cursive" }}>
                    DRAX 2024 is a premier tech fest featuring the latest innovations in technology, workshops,
                    competitions, and networking opportunities with industry experts. Experience the future of tech with us!
                </p>
            </div>
        </section>
    );
}

export default About;
