// Tree3ContactWithImage.jsx
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react"; // icons

export default function Tree3ContactWithImage() {
  return (
    <section className="bg-gradient-to-br from-green-900 via-emerald-800 to-green-600 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Contact Info */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">Tree3</h2>
          <p className="text-xl md:text-2xl font-semibold">
            Get Ready for What Comes Next
          </p>
          <p className="text-md md:text-lg">
            Connect with us to learn more about Tree3 World School and our
            global learning experiences. Our team is ready to guide you through
            admissions, curriculum, and innovative learning opportunities.
          </p>

          <div className="mt-6 space-y-4 text-md md:text-lg">
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5" /> 95537 59928
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5" /> hello@reallygreatsite.com
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-5 h-5" /> 123 Anywhere ST., Any City, ST
              12345
            </p>
            <p>
              <a
                href="https://www.tree3education.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-green-200 transition-colors"
              >
                www.tree3education.com
              </a>
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2">
          <img
            src="/contactimage.jpg"
            alt="Tree3 Education"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
