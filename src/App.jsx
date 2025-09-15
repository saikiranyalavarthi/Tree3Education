import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import DistinctiveVision from "./components/DistinctiveVision";
import Tree3Section from "./components/Tree3Section";
import Tree3ValuesSection from "./components/Tree3ValuesSection";
import Tree3ContactSection from "./components/Tree3ContactSection";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-chalk bg-cover bg-center">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutUs />
        <DistinctiveVision />
        <Tree3ValuesSection />
        <Tree3Section />
        <Tree3ContactSection />
      </main>
      <Footer />
    </div>
  );
}
