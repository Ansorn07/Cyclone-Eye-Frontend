// @ts-nocheck
'use client';

import { alertsData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Leaf, Megaphone } from "lucide-react";
import Link from "next/link";

const calmSeverity = {
  green: { textColor: "text-emerald-300" },
  blue: { textColor: "text-sky-300" },
  teal: { textColor: "text-teal-300" },
};

export default function AlertTicker() {
  const allAlerts = [...alertsData, ...alertsData]; // For seamless looping

  return (
    <div className="relative h-14 overflow-hidden bg-gradient-to-r from-emerald-800 via-teal-800 to-sky-900 border-y border-teal-700 shadow-md">

      {/* Left Icon */}
      <div className="absolute inset-y-0 left-0 z-10 flex items-center bg-gradient-to-r from-emerald-900 to-transparent px-4">
        <span className="text-green-300 text-lg animate-bounce">🌀</span>
        <Megaphone className="h-5 w-5 text-emerald-200 ml-2" />
      </div>

      {/* Ticker */}
      <div className="animate-calm-ticker flex w-max items-center pl-20 pr-40 gap-6">
        {allAlerts.map((alert, index) => {
          const config = calmSeverity[alert.severity] ?? calmSeverity["teal"];
          return (
            <Link
              href="/alerts"
              key={`${alert.id}-${index}`}
              className={cn(
                "flex items-center gap-2 whitespace-nowrap py-2 px-4 text-sm transition-colors hover:bg-teal-700/40 rounded",
                config.textColor
              )}
            >
              <span className="text-sky-200">🌪️</span>
              <Leaf className="h-4 w-4 text-green-200" />
              <span className="font-semibold text-white">{alert.title}:</span>
              <span className="text-teal-100">{alert.ticker_message}</span>
              <span className="text-cyan-200">🛰️</span>
            </Link>
          );
        })}
      </div>

      {/* Right Badge */}
      <div className="absolute inset-y-0 right-0 z-10 flex items-center gap-2 bg-gradient-to-l from-red-700 via-orange-500 to-transparent px-6 py-2 rounded-bl-md shadow-xl animate-blink-soft backdrop-blur-sm">
  <span className="text-sm font-extrabold tracking-wider text-white uppercase drop-shadow-md">
    🚨 Cyclone Alert – KIIT Live Desk 🌀
  </span>
</div>

      {/* Animation */}
      <style jsx>{`
        @keyframes calm-ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-calm-ticker {
          animation: calm-ticker 60s linear infinite;
        }
        .animate-calm-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
