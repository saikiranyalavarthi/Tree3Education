// Tree3ValuesSectionWithImage.jsx
import React from "react";

export default function Tree3ValuesSectionWithImage() {
  return (
    <section className="bg-gradient-to-br from-green-900 via-emerald-800 to-green-600 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="md:w-1/2 space-y-12">
          {/* Section Title */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold">TREE3</h2>
            <p className="text-lg md:text-xl mt-2">A New Beginning</p>
          </div>

          {/* First Value */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">01</h3>
            <p className="text-md md:text-lg">
              Just as our travels shape our experiences and opinions, we've also
              looked toward other cultures to shape the core values that form
              the foundation of our educational philosophy. In all aspects of
              living and learning, we value: When you join Tree 3 education you
              entrust some of the most valuable years of your life to our hands.
              We take this commitment seriously - and these, in turn, are our
              promises to you:
            </p>
          </div>

          {/* Second Value */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">02</h3>
            <p className="text-md md:text-lg">
              A passion for travel. A strong academic record. And the desire to
              improve the world as you experience it. If this sounds like you,
              you just might be our ideal candidate! Start your application with
              a five-minute inquiry form - you never know where you might end
              up. A desire for an unconventional, progressive high school
              experience that engages global issues directly. A strong community
              orientation, collaborative spirit, and positive attitude. Parents
              who are active and supportive participants in our innovative
              school model and community.
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2">
          <img
            src="/teach.jpg"
            alt="Tree3 Values"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
