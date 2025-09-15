// Tree3SectionWithImageLeft.jsx
import React from "react";

export default function Tree3SectionWithImageLeft() {
  return (
    <section className="bg-gradient-to-br from-green-900 via-emerald-800 to-green-600 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="md:w-1/2">
          <img
            src="/skill.jpg"
            alt="Tree3 Education"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold">Tree3 World School</h2>
          <p className="text-lg md:text-xl font-semibold">
            Travel globally to your class
          </p>
          <p className="text-2xl md:text-3xl font-bold">
            'WORLD CLASS' EDUCATION
          </p>
          <p className="text-md md:text-lg">
            Schooling around the world feels like real learning from different
            countries & classrooms.
          </p>
          <p className="text-md md:text-lg">
            AI-Enabled Learning | Affiliated & Accredited
          </p>
          <p className="text-md md:text-lg italic">
            Dive into the beauty of a new learning era.
          </p>
        </div>
      </div>
    </section>
  );
}
