'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

type Day = {
  date: string;
  status: 'operational' | 'non_operational';
};

type ServiceStatus = {
  name: string;
  status: string;
  indicator?: "none" | "minor" | "major" | "critical";
};

const statusUrls: Record<string, string> = {
  Google: "/api/google-status", // proxy
  Cloudflare: "https://www.cloudflarestatus.com/api/v2/status.json",
  ZOOM: "https://status.zoom.us/api/v2/status.json"
};

export default function ActivityPage() {
  const [history, setHistory] = useState<Day[]>([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [services, setServices] = useState<ServiceStatus[]>([]);

  useEffect(() => {
    const fetchGitHubHistory = async () => {
      try {
        const res = await fetch('https://www.githubstatus.com/api/v2/incidents.json');
        const data = await res.json();

        const incidentDates = new Set<string>();
        data.incidents.forEach((incident: any) => {
          const date = new Date(incident.created_at).toISOString().split('T')[0];
          incidentDates.add(date);
        });

        const today = new Date();
        const past90: Day[] = Array.from({ length: 90 }).map((_, i) => {
          const date = new Date(today);
          date.setDate(today.getDate() - (89 - i));
          const dateStr = date.toISOString().split('T')[0];

          return {
            date: dateStr,
            status: incidentDates.has(dateStr) ? 'non_operational' : 'operational',
          };
        });

        setHistory(past90);
      } catch (err) {
        console.error('Error fetching incident history:', err);
      } finally {
        setLoading(false);
      }
    };

    const fetchThirdPartyStatus = async () => {
      const results = await Promise.all(
        Object.entries(statusUrls).map(async ([name, url]) => {
          try {
            const res = await fetch(url);
            const text = await res.text();

            let data;
            try {
              data = JSON.parse(text);
            } catch (jsonErr) {
              console.error(`❌ Failed to parse JSON for ${name}:`, jsonErr);
              return { name, status: "Invalid JSON" };
            }

            return {
              name,
              status: data.status.description,
              indicator: data.status.indicator,
            };
          } catch (err) {
            console.error(`❌ Fetch error for ${name}:`, err);
            return { name, status: "Unavailable" };
          }
        })
      );
      setServices(results);
    };

    fetchGitHubHistory();
    fetchThirdPartyStatus();
  }, []);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const getIndicatorColor = (indicator?: string) => {
    switch (indicator) {
      case "none": return "text-green-600 dark:text-green-400";
      case "minor": return "text-orange-500 dark:text-orange-400";
      case "major":
      case "critical": return "text-red-600 dark:text-red-400";
      default: return "text-gray-600 dark:text-gray-300";
    }
  };

  return (
    <div className={`p-8 min-h-screen transition-colors duration-500 ${
      darkMode ? 'bg-[#1a1a1a] text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between font-sans mb-10">
        <h1 className={`text-3xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
          System Status Dashboard
        </h1>
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${
            darkMode ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
          } hover:brightness-110 transition`}
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      {/* GitHub 90-Day Status */}
      <div className="mb-12">
        <h2 className={`text-2xl font-sans font-semibold mb-4 ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
          GitHub - Last 90 Days
        </h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className={`flex gap-1 overflow-x-auto p-4 rounded-xl shadow-inner ${
            darkMode ? 'bg-gray-800' : 'bg-gray-200'
          }`}>
            {history.map((day, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.01 }}
                className={`w-2 h-12 rounded-sm ${
                  day.status === 'operational' ? 'bg-green-500' : 'bg-red-500'
                }`}
                title={`${day.date} - ${day.status}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Third-Party Status */}
      <div className="mt-6">
        <h2 className={`text-2xl font-sans font-bold mb-4 ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
          Third Party Components
        </h2>
        <div className="space-y-3">
          {services.map((service) => (
            <div
              key={service.name}
              className={`flex justify-between items-center px-4 py-3 font-bold border rounded-md shadow-md ${
                darkMode ? 'bg-[#2a2a2a] border-gray-600' : 'bg-gray-100 border-gray-300'
              }`}
            >
              <span>{service.name}</span>
              <span className={getIndicatorColor(service.indicator)}>
                {service.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
