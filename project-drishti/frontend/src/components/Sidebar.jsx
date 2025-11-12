import { Link } from "react-router-dom";
import { Home, Video, AlertTriangle, BarChart2, Settings } from "lucide-react";

export default function Sidebar() {
  const items = [
    { icon: <Home size={20} />, label: "Dashboard", path: "/" },
    { icon: <Video size={20} />, label: "Live Feed", path: "/live" },
    { icon: <AlertTriangle size={20} />, label: "Alerts", path: "/alerts" },
    { icon: <BarChart2 size={20} />, label: "Analytics", path: "/analytics" },
    { icon: <Settings size={20} />, label: "Settings", path: "/settings" },
  ];

  return (
    <aside className="h-screen w-60 bg-indigo-700 text-white flex flex-col p-4">
      <h2 className="text-lg font-semibold mb-6 text-center border-b border-indigo-500 pb-2">
        Menu
      </h2>
      <ul className="flex-1 space-y-4">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              to={item.path}
              className="flex items-center gap-3 cursor-pointer hover:bg-indigo-600 px-3 py-2 rounded-md transition"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <footer className="text-xs text-indigo-300 text-center">
        © 2025 Drishti
      </footer>
    </aside>
  );
}
