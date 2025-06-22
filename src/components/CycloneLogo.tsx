"use client";

import Link from "next/link";
import { Wind } from "lucide-react";

export default function CycloneLogo() {
  return (
    <Link
      href="/"
      className="group relative flex items-center space-x-3"
    >
      {/* Cyclone Icon */}
      <div className="relative h-8 w-8 p-1 rounded-full group-hover:animate-cyclone-burst">
        <Wind className="h-6 w-6 text-cyan-400 drop-shadow-md group-hover:animate-cyclone-spin-fast" />
        <span className="absolute -inset-1 rounded-full border-2 border-cyan-500 opacity-0 group-hover:animate-cyclone-ring" />
      </div>

      {/* Logo Text */}
      <span className="text-lg font-extrabold tracking-widest font-mono text-cyan-300 group-hover:text-cyan-100 transition-transform duration-300 group-hover:scale-105">
        CycloneEye
      </span>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes cyclone-spin-fast {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(1080deg);
          }
        }

        @keyframes cyclone-burst {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.25);
          }
        }

        @keyframes cyclone-ring {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        .group-hover\\:animate-cyclone-spin-fast:hover {
          animation: cyclone-spin-fast 1.5s ease-in-out;
        }

        .group-hover\\:animate-cyclone-burst:hover {
          animation: cyclone-burst 1.2s ease-in-out;
        }

        .group-hover\\:animate-cyclone-ring:hover {
          animation: cyclone-ring 1.2s ease-out;
          opacity: 1;
        }
      `}</style>
    </Link>
  );
}
