// src/Footer.jsx
import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-400 py-6 text-center">
            <p>© 2024 DRAX Tech Fest. All rights reserved.</p>
            <div className="mt-2">
                <a href="#" className="text-blue-500 hover:text-blue-700 mx-2">Facebook</a>
                <a href="#" className="text-blue-500 hover:text-blue-700 mx-2">Twitter</a>
                <a href="#" className="text-blue-500 hover:text-blue-700 mx-2">Instagram</a>
            </div>
        </footer>
    );
}

export default Footer;
