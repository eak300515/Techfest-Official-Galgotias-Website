import React from 'react';
import './Workshops.css'; // Import the CSS file for animations

function Workshops() {
    const workshops = [
        { title: "AI & Machine Learning Workshop", description: "Hands-on workshop on AI and ML basics, applications, and project ideas." },
        { title: "Cybersecurity Bootcamp", description: "Learn about cybersecurity fundamentals, threats, and best practices." },
        { title: "Blockchain Fundamentals", description: "Introduction to blockchain technology, its potential, and use cases." },
        { title: "IoT and Smart Devices", description: "Explore the world of IoT and build your own smart device projects." },
        { title: "Robotics Workshop", description: "Get insights into robotics with hands-on experience in building and coding robots." },
        { title: "Web3 & Decentralized Apps", description: "Discover decentralized applications and their development on Web3 platforms." },
        { title: "Competitive Coding Challenges", description: "Test your skills with coding competitions and problem-solving exercises." },
        { title: "Data Science & Analytics", description: "Dive into data science and analytics for actionable insights and project ideas." }
    ];

    return (
        <section className="bg-gray-900 py-16 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Workshops</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {workshops.map((workshop, index) => (
                        <div key={index} className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front bg-gray-800 p-6 rounded-lg text-center shadow-lg">
                                    <h3 className="text-2xl font-semibold mb-4">{workshop.title}</h3>
                                </div>
                                <div className="flip-card-back bg-gray-700 p-6 rounded-lg text-center shadow-lg">
                                    <p className="text-gray-300">{workshop.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Workshops;
