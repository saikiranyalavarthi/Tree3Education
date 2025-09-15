// AboutUsWithImage.jsx
import React from "react";

export default function AboutUsWithImage() {
  return (
    <section className="relative py-16 px-6 md:px-12 bg-gradient-to-r from-green-900 via-emerald-700 to-green-500 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="md:w-1/2 relative z-10 text-center md:text-left">
          {/* Decorative Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none -z-10 rounded-2xl"></div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Explore and Experience the Magic of Learning
          </h2>
          <p className="text-lg md:text-xl text-yellow-200 font-semibold mb-6">
            Prepare to be dazzled by your child's shining life ✨
          </p>

          {/* Description */}
          <p className="text-base md:text-lg leading-relaxed text-gray-100 bg-black/30 p-6 rounded-2xl shadow-lg">
            It can be overwhelming to know where to start,{" "}
            <span className="text-yellow-300 font-semibold">Tree3</span> is the
            way to uncover the true essence of this vibrant new learning system.
            We have designed every subject to learn uniquely, making every
            student stand out in an iconic world like a gem. At{" "}
            <span className="text-yellow-300 font-semibold">Tree3</span>, we
            will guide our students to the most unique classes and breathtaking
            schools around the world, ensuring your child doesn't miss a single
            highlight of the learning and living journey through life.
          </p>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2">
          <img
            src="/learningimage.jpg"
            alt="Tree3 Learning"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
