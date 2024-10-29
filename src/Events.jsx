// src/Events.jsx
import React from 'react';
import './index.css';

function Events() {
    const events = [
        { title: "Tech Exhibition", description: "Explore the latest tech gadgets and innovations." },
        { title: "Guest Lectures", description: "Hear from industry leaders on the future of technology." },
        { title: "Workshops", description: "Hands-on learning with AI, robotics, and more." },
        { title: "RoboWars Competition", description: "Watch robots in action and compete for the top spot." },
        { title: "Internation Tech Summit", description: "Tech Summits led By renowned leaders like Sam Altwin (OpenAI)" },
        { title: "E-Sports", description: "Dive into techy Competitions like CSS Batle and Hackathons." },
        { title: "EDM Night", description: "Experience the best closing and recreation with International Performances" },
    ];

    return (
        <section className="bg-gray-900 py-16 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-8">Key Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {events.map((event, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                            <h3 className="text-2xl font-semibold mb-3">{event.title}</h3>
                            <p className="text-gray-300">{event.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Events;
