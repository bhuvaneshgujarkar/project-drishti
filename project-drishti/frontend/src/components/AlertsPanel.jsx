import React, { useEffect, useState } from "react";
import { collection, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function AlertsPanel() {
  const [alerts, setAlerts] = useState([]);
  const [newAlert, setNewAlert] = useState("");

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "alerts"), (snapshot) => {
      const alertData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAlerts(alertData.sort((a, b) => b.timestamp - a.timestamp));
    });
    return () => unsub();
  }, []);

  const handleAddAlert = async () => {
    if (!newAlert.trim()) return;
    await addDoc(collection(db, "alerts"), {
      message: newAlert,
      timestamp: serverTimestamp(),
    });
    setNewAlert("");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Live Alerts</h2>
      
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Enter new alert..."
          value={newAlert}
          onChange={(e) => setNewAlert(e.target.value)}
          className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 outline-none"
        />
        <button
          onClick={handleAddAlert}
          className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2 max-h-72 overflow-y-auto">
        {alerts.map((alert) => (
          <li
            key={alert.id}
            className="p-3 bg-red-50 border border-red-200 rounded-md text-sm"
          >
            {alert.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
