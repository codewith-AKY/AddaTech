import React from "react";
import { motion } from "framer-motion";
import { featureData } from "../Data/featureData";
import { FeatureCard } from "../Data/featureCard";

const Features = () => {
  return (
    <section id="features" className="mt-2 bg-gradient-to-b from-orange-200 via-orange-100 to-orange-200 py-16">
      
      {/* Section Title Badge */}
      <div className="w-[90%] max-w-fit mx-auto border border-orange-300/80 bg-white/40 backdrop-blur-md hover:border-orange-400 rounded-full px-6 py-2 text-center transition-all duration-300 shadow-sm hover:shadow-md">
        <h2 className="bg-gradient-to-r from-orange-600 via-orange-700 to-amber-500 bg-clip-text text-transparent font-extrabold text-sm md:text-base tracking-widest uppercase">
          Features
        </h2>
      </div>

      {/* Main Heading */}
      <div className="w-[90%] sm:w-[85%] md:w-[70%] lg:w-[60%] mx-auto mt-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-800">
          Everything You Need to Run Your Cafe{" "}
          <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
            Smarter
          </span>
        </h1>
      </div>

      {/* Description */}
      <div className="w-[90%] sm:w-[85%] md:w-[70%] lg:w-[60%] mx-auto mt-4 text-center">
        <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
          Our smart cafe management system helps you{" "}
          <span className="font-semibold text-orange-700">
            manage menus, track orders, control inventory, and analyze sales
          </span>{" "}
          to streamline daily operations and increase profitability.
        </p>
      </div>

      {/* Grid Layout Container - Changed to 4 columns on large screens */}
      <div className="w-[70%] max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
        
        {/* ROW 1: First 3 Cards (User Mgmt, Menu Mgmt [Spans 2 cols], Table Mgmt) */}
        {featureData.slice(0, 1).map((feature) => (
          <div key={feature.id} className="lg:col-span-1">
            <FeatureCard feature={feature} />
          </div>
        ))}
        {featureData.slice(1, 2).map((feature) => (
          <div key={feature.id} className="lg:col-span-2">
            <FeatureCard feature={feature} />
          </div>
        ))}
        {featureData.slice(2, 3).map((feature) => (
          <div key={feature.id} className="lg:col-span-1">
            <FeatureCard feature={feature} />
          </div>
        ))}

        {/* ROW 2: Inventory (1 Col) | Dashboard (2 Cols) | Sales & Analytics (1 Col) */}
        {/* Card 4: Inventory Tracking */}
        {featureData.slice(3, 4).map((feature) => (
          <div key={feature.id} className="lg:col-span-1">
            <FeatureCard feature={feature} />
          </div>
        ))}

        {/* Central Dashboard Preview - Spans 2 columns right in the middle */}
        <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 border border-orange-500/20 rounded-2xl p-2 sm:p-2 flex flex-col justify-between shadow-xl text-white">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-full mb-3">
              Core Platform
            </span>
            <h3 className="text-xl sm:text-3xl font-bold mb-2">
              Intuitive Café Management Dashboard
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-2">
              Get full visual control over your daily café flow. Monitor live order queues, staff actions, and revenue metrics in one centralized view.
            </p>
          </div>
          
          <div className="relative rounded-xl overflow-hidden border border-slate-700/40 bg-slate-900 shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" 
              alt="Cafe Management Dashboard Interface" 
              className="w-full h-80% object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Card 5: Sales & Analytics */}
        {featureData.slice(4, 5).map((feature) => (
          <div key={feature.id} className="lg:col-span-1">
            <FeatureCard feature={feature} />
          </div>
        ))}

        {/* ROW 3: Notifications (2 Cols) | Works Everywhere (2 Cols) */}
        {featureData.slice(5, 7).map((feature) => (
          <div key={feature.id} className="lg:col-span-2">
            <FeatureCard feature={feature} />
          </div>
        ))}

      </div>
    </section>
  );
};

export default Features;