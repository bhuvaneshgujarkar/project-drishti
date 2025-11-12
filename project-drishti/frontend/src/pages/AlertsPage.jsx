import AlertsPanel from "../components/AlertsPanel";

export default function AlertsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        Alerts & Incidents
      </h1>
      <AlertsPanel />
    </div>
  );
}
