// @ts-nocheck
'use client';

import { alertsData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { AlertTriangle, Megaphone } from "lucide-react";
import Link from "next/link";

const severityConfig = {
    red: {
        textColor: 'text-severity-red',
    },
    orange: {
        textColor: 'text-severity-orange',
    },
    yellow: {
        textColor: 'text-severity-yellow',
    }
}

export default function AlertTicker() {
  const allAlerts = [...alertsData, ...alertsData]; // Duplicate for seamless scrolling

  return (
    <div className="bg-muted/50 border-b border-t overflow-hidden relative h-10">
      <div className="absolute inset-y-0 left-0 z-10 flex items-center bg-gradient-to-r from-muted/50 to-transparent px-4">
        <Megaphone className="h-5 w-5 text-primary" />
      </div>
      <div className="animate-ticker flex w-max items-center">
        {allAlerts.map((alert, index) => {
          const config = severityConfig[alert.severity];
          return (
            <Link 
                href="/alerts"
                key={`${alert.id}-${index}`} 
                className={cn(
                    "flex items-center gap-2 whitespace-nowrap py-2 px-6 text-sm hover:bg-accent transition-colors",
                    config.textColor
                )}
            >
              <AlertTriangle className="h-4 w-4" />
              <span className="font-semibold">{alert.title}:</span>
              <span className="text-muted-foreground">{alert.ticker_message}</span>
            </Link>
          );
        })}
      </div>
      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-ticker {
          animation: ticker 40s linear infinite;
        }
        .animate-ticker:hover {
            animation-play-state: paused;
        }
      `}</style>
       <div className="absolute inset-y-0 right-0 z-10 flex items-center bg-gradient-to-l from-muted/50 to-transparent px-4">
        <span className="text-xs font-semibold uppercase text-primary">Live Alerts</span>
      </div>
    </div>
  );
}
