import React from "react";
import "../styles/hero.css"; // We'll keep your CSS animations here

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>

      <div className="geometric-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape shape4"></div>
        <div className="shape shape5"></div>
        <div className="shape shape6"></div>
      </div>

      <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Left Side - Text */}
        <div className="hero-text animate-slideInLeft">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-[#00ffcc] bg-clip-text text-transparent mb-6">
            Data Analytics <br /> Dashboard
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-8">
            Transform your data into actionable insights with our cutting-edge
            analytics platform. Real-time monitoring, intelligent predictions,
            and beautiful visualizations.
          </p>
          <a
            href="#dashboard"
            className="cta-button inline-block px-10 py-4 bg-gradient-to-r from-[#ff6b6b] to-[#ff8e53] text-white font-semibold rounded-full shadow-lg hover:-translate-y-1 transition-transform duration-300"
          >
            Get Started
          </a>
        </div>

        {/* Right Side - Visual */}
        <div className="hero-visual animate-slideInRight">
          <div className="city-container relative w-full h-[400px]">
            {/* Buildings */}
            <div className="building building1">
              <div className="building-fill"></div>
              <div className="building-windows"></div>
            </div>
            <div className="building building2">
              <div className="building-fill"></div>
              <div className="building-windows"></div>
            </div>
            <div className="building building3">
              <div className="building-fill"></div>
              <div className="building-windows"></div>
            </div>
            <div className="building building4">
              <div className="building-fill"></div>
              <div className="building-windows"></div>
            </div>

            {/* Neon lines */}
            <div className="neon-line neon-line1"></div>
            <div className="neon-line neon-line2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;