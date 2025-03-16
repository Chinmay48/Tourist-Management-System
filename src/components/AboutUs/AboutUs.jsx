import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://www.pngkey.com/png/full/855-8553271_new-travel-peeps-travel-agency-logo-png.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Welcome to Tour&Travels, your ultimate guide to unforgettable travel experiences!
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Founded in 2000, we are a passionate team of travel enthusiasts who believe in the power of exploration and discovery. Our mission is to provide you with personalized travel recommendations, detailed itineraries, and expert tips that make every trip truly memorable.
                        </p>
                        <p className="mt-4 text-gray-600">
                        At Our Website, we offer a wide range of travel options, from curated tours to off-the-beaten-path destinations, ensuring that you find the perfect vacation for every interest and budget. Our goal is to inspire wanderlust, simplify travel planning, and make your journey as smooth as possible.

Join us as we explore the world together — one unforgettable adventure at a time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

