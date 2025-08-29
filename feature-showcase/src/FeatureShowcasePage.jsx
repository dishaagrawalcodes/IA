// src/pages/FeatureShowcasePage.jsx

import React from "react";
import phoneMockup from "./assets/phone.png"; // <- replace with your phone image path

const FeatureShowcasePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-10">
      {/* Left Section */}
      <div className="flex-1">
        <h4 className="text-blue-500 font-medium mb-2">Feature No. 1 -</h4>
        <h2 className="text-xl font-bold mb-4">TEXT HEADING DISPLAY</h2>
        <ul className="text-gray-600 space-y-2 mb-6">
          <li>• Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>• Ut enim ad minim veniam quis nostrud exercitation ullamco.</li>
          <li>• Sed ut perspiciatis unde omnis iste natus error voluptatem.</li>
          <li>• Duis aute irure dolor in reprehenderit in voluptate.</li>
        </ul>
        <div className="flex items-center space-x-4 text-blue-500 text-2xl">
          <button className="hover:text-blue-700">←</button>
          <button className="hover:text-blue-700">→</button>
        </div>
      </div>

      {/* Center Section - Phone */}
      <div className="flex-1 flex justify-center">
        <img
          src={phoneMockup}
          alt="Phone Mockup"
          className="h-[450px] object-contain"
        />
      </div>

      {/* Right Section - Features */}
      <div className="flex-1">
        <h3 className="font-semibold mb-6">Feature Showcase</h3>
        <ul className="space-y-4">
          <li className="text-gray-600">Feature 1 : Lorem ipsum dolor</li>
          <li className="text-blue-600 font-semibold border-l-4 border-blue-500 pl-2">
            Feature 2 : Lorem ipsum dolor
          </li>
          <li className="text-gray-600">Feature 3 : Lorem ipsum dolor</li>
          <li className="text-gray-600">Feature 4 : Lorem ipsum dolor</li>
          <li className="text-gray-600">Feature 5 : Lorem ipsum dolor</li>
        </ul>
      </div>
    </div>
  );
};

export default FeatureShowcasePage;
