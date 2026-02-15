'use client';

import React, { useState } from 'react';

export default function ProjectsPage() {
  const properties = [
    { id: 1, name: "Pool Villa", location: "Manik - Phuket", img: "/images/pool.jpg", projectType: "Residential" },
    { id: 2, name: "Cafe", location: "Mueang - Phuket", img: "/images/pro1.jpg", projectType: "Commercial" },
    { id: 3, name: "Luxury Villa", location: "Thalang - Phuket", img: "/images/project3.jpg", projectType: "Residential" },
    { id: 4, name: "Dental Clinic", location: "Thalang - Phuket", img: "/images/dental3.jpg", projectType: "Commercial" },
    { id: 5, name: "Dermatology Clinic", location: "Thalang - Phuket", img: "/images/Drpat3.jpg", projectType: "Commercial" },
    { id: 6, name: "Boutique Villa", location: "Thalang - Phuket", img: "/images/wood1.jpg", projectType: "Residential" },
  ];

  const [selectedType, setSelectedType] = useState("All");

  const filteredProperties =
    selectedType === "All"
      ? properties
      : properties.filter(p => p.projectType === selectedType);

  return (
    <main className="min-h-screen bg-sky-50">

      {/* ===== Cover Section ===== */}
      <section
        className="relative bg-cover bg-center h-[350px] rounded-xl overflow-hidden shadow-lg mx-4 md:mx-8 mt-5"
        style={{ backgroundImage: "url('/images/inte.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Our Projects
            </h1>
            <p className="mt-3 text-base md:text-lg max-w-2xl mx-auto">
              Residential and Commercial engineering works.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Type Toggle ===== */}
      <section className="mt-8 flex justify-center gap-4">
        {["All", "Residential", "Commercial"].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              selectedType === type
                ? "bg-sky-700 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-sky-100"
            }`}
          >
            {type}
          </button>
        ))}
      </section>

      {/* ===== Projects Grid ===== */}
      <section className="mx-4 md:mx-8 mt-10 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredProperties.map((property) => {
            const isResidential = property.projectType === "Residential";

            return (
              <div
                key={property.id}
                className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={property.img}
                    alt={property.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />

                  {/* TYPE BADGE (COLOR CHANGES HERE ONLY) */}
                  <span
                    className={`absolute top-3 left-3 px-4 py-1 text-xs font-semibold rounded-full text-white
                      ${
                        isResidential
                          ? "bg-sky-500"
                          : "bg-blue-700"
                      }
                    `}
                  >
                    {property.projectType}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {property.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {property.location}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="text-center text-gray-400 text-sm">
          © 2024 UTO Advance Engineering. All rights reserved.
        </div>
      </footer>

    </main>
  );
}
