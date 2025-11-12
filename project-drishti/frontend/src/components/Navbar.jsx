// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-indigo-600">Project Drishti</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500">System Status: </span>
        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md text-sm font-semibold">
          Online
        </span>
      </div>
    </nav>
  );
}
