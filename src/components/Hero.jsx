// Hero.jsx
import React from "react";

const places = [
  {
    name: "Brazil",
    img: "/austrilia.jpg",
    desc: "Famous for Christ the Redeemer and Rio Carnival.",
  },
  {
    name: "Moscow",
    img: "/moscow.jpg",
    desc: "Home of Red Square and St. Basil’s Cathedral.",
  },
  {
    name: "Morocco",
    img: "morocco.jpg",
    desc: "Known for colorful markets and coastal beauty.",
  },
  {
    name: "New Zealand",
    img: "newzealand.jpg",
    desc: "Land of adventure, nature, and Maori culture.",
  },
  {
    name: "Italy",
    img: "italy.jpg",
    desc: "Rich in history, art, and cuisine.",
  },
  {
    name: "Japan",
    img: "japan.jpg",
    desc: "Blend of tradition and cutting-edge technology.",
  },
  {
    name: "India",
    img: "india.jpg",
    desc: "Famous for the Taj Mahal and vibrant culture.",
  },
  {
    name: "Australia",
    img: "austrilia.jpg",
    desc: "Known for Sydney Opera House and Great Barrier Reef.",
  },
];

export default function Hero() {
  return (
    <section className="py-12 px-4 text-center bg-gradient-to-br from-green-900 via-emerald-800 to-green-600">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
        Tour Your Classroom
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {places.map((place, idx) => (
          <div
            key={idx}
            className="bg-black/30 p-4 rounded-xl shadow-md hover:scale-105 transform transition"
          >
            <img
              src={place.img}
              alt={place.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-white">{place.name}</h3>
            <p className="text-sm text-gray-200">{place.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
