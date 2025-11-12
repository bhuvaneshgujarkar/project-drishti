// src/components/Dashboard.jsx
import React from "react";

export default function Dashboard() {
  return (
    <main className="flex-1 p-6 bg-gray-50">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard Overview</h2>

      <div className="grid grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Active Cameras</h3>
          <p className="text-4xl font-bold text-indigo-600">12</p>
        </div>

        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Active Alerts</h3>
          <p className="text-4xl font-bold text-red-500">3</p>
        </div>

        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="font-semibold text-lg mb-2">On-Ground Teams</h3>
          <p className="text-4xl font-bold text-green-500">5</p>
        </div>
      </div>
    </main>
  );
}
