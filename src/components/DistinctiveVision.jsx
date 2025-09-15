import React from "react";

const visions = [
  {
    number: "01",
    title: "Beyond Borders",
    text: "Facilitating education and learning beyond borders with endless opportunities and networking. Every student makes a friend from different parts of the world, experiencing learning under one roof of vast culture.",
  },
  {
    number: "02",
    title: "No-Stop Learning",
    text: "There is NO-STOP for learning. Founded to teach culture, trade, finance & innovation, Tree3 is a hub where education meets diverse methods. Students will find a lively atmosphere filled with performance and growth.",
  },
  {
    number: "03",
    title: "Non-Traditional Learning",
    text: "Tree3 is a learning home for curious kids. Designed for non-traditional learning patterns, we have created a masterpiece syllabus with architectural precision for the future of our students.",
  },
];

export default function DistinctiveVision() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-green-900 via-emerald-800 to-green-600 text-white relative">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Distinctive Vision
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {visions.map((item, idx) => (
            <div
              key={idx}
              className="bg-black/30 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300"
            >
              {/* Number */}
              <span className="text-5xl font-extrabold text-yellow-300 drop-shadow-md">
                {item.number}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold mt-4 mb-3 text-green-100">
                {item.title}
              </h3>

              {/* Text */}
              <p className="text-sm text-gray-200 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
