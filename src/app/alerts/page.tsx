import { alertsData } from "@/lib/data";
import AlertCard from "@/components/alert-card";



export default function AlertsPage() {
  const sortedAlerts = [...alertsData].sort((a, b) => {
    const severityOrder = { red: 3, orange: 2, yellow: 1 };
    return severityOrder[b.severity as keyof typeof severityOrder] - severityOrder[a.severity as keyof typeof severityOrder];
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold font-headline  dark:text-black"> 🌪️ Weather Alerts</h1>
        <p className="font-extrabold dark:text-gray-100">
          Stay updated with the latest warnings and advisories from official sources.
        </p>
      </div>
      <div className="max-w-4xl mx-auto space-y-6">
        {sortedAlerts.map(alert => (
          <AlertCard key={alert.id} alert={alert} />
        ))}
      </div>
    </div>
  );
}
