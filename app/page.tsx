'use client';


import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


export default function Home() {
  const [username, setUsername] = useState<string | null>(null);
  const [loggedOut, setLoggedOut] = useState(false); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const [services] = useState([
    { id: 1, name: "Electrical System", img: "/images/elec.jpg" },
    { id: 2, name: "Water Supply System", img: "/images/water.jpg" },
    { id: 3, name: "Air Conditioning System", img: "/images/airr.jpg" },
    { id: 4, name: "Design and Drafting", img: "/images/design.jpg" },
  ]);

  const heroImages = [
  '/images/project1.jpg',
  '/images/project2.jpg',
  '/images/project3.jpg',
  '/images/project4.jpg',
];


  useEffect(() => {
  const syncAuthState = () => {
    const storedUsername = localStorage.getItem('username');

    setUsername(storedUsername);
    setLoggedOut(!storedUsername);
  };

  syncAuthState(); 

  window.addEventListener('storage', syncAuthState);

  return () => {
    window.removeEventListener('storage', syncAuthState);
  };
}, []);



  return (
    <div>
      
      {/* ===== HERO SLIDER ===== */}
<section id="home" className="relative h-[600px]">
  <Swiper
    modules={[Autoplay, Pagination]}
    autoplay={{ delay: 4000, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    loop
    className="h-full"
  >
    {heroImages.map((img, i) => (
      <SwiperSlide key={i}>
        <div
          className="relative h-[600px] bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        >
          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* ===== HERO TEXT (does NOT block dots) ===== */}
  <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-white text-center">
    <div>
      <h1 className="text-6xl font-extrabold">
        Find Your Dream <span className="text-sky-400">Home</span>
      </h1>
      <p className="mt-4 text-lg max-w-xl mx-auto">
        Discover luxurious properties tailored to your needs.
      </p>
    </div>
  </div>
</section>


      {/* Display welcome message with a beautiful design */}
      {username && (
        <section id="welcome-message" className="py-12 bg-gradient-to-r from-sky-600 via-white-600 to-slate-600">
          <div className="container mx-auto text-center text-white">
            <h2 className="text-4xl font-extrabold mb-4">
              Welcome back, <span className="text-black">{username}</span>!
            </h2>
            <p className="text-xl font-light">We are glad to have you back with us.</p>
          </div>
        </section>
      )}

      {/* Show logout message after logout */}
      {loggedOut && (
        <section id="logout-message" className="py-12 bg-gradient-to-r from-gray-500 via-gray-700 to-gray-500">
          <div className="container mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">You have successfully logged out!</h2>
            <p className="text-lg text-sky-300">We hope to see you again soon.♡</p>
          </div>
        </section>
      )}

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition"
              >
                <img src={service.img} alt={service.name} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800">{service.name}</h3>
                  <Link href={`/services/${service.id}`}>
                    <button className="mt-4 px-6 py-2 bg-sky-900 text-gray-300 rounded-full hover:bg-gray-700">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            &copy; 2024 UTO Advance Engineering. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            {["Instagram"].map((platform) => (
              <a
                key={platform}
                href="https://www.instagram.com/uto_advance_engineering/"
                className="text-gray-400 hover:text-sky-400 transition"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
