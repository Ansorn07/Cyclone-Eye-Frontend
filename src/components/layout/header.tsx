"use client";

import CycloneLogo from "@/components/CycloneLogo";
import React, { useState } from "react";
import Link from "next/link";
import {
  Wind,
  Menu,
  X,
  Map,
  BarChart3,
  History,
  AlertTriangle,
  BookOpen,
  ChevronDown,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import AlertTicker from "../alert-ticker";

const navLinks = [
  { href: "/", label: "Home", icon: <Wind className="w-4 h-4" /> },
  { href: "/map", label: "Live Map", icon: <Map className="w-4 h-4" /> },
  { href: "/forecast", label: "Forecast", icon: <BarChart3 className="w-4 h-4" /> },
  { href: "/history", label: "History", icon: <History className="w-4 h-4" /> },
  { href: "/alerts", label: "Alerts", icon: <AlertTriangle className="w-4 h-4" /> },
  { href: "/resources", label: "Safety Guide", icon: <BookOpen className="w-4 h-4" /> },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 border-b border-gray-700 shadow-2xl">
      <div className="container flex h-16 items-center justify-between">
        
        {/* ✅ CycloneLogo placed here */}
        <CycloneLogo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className={cn(
                "transition-colors hover:text-cyan-400 hover:underline underline-offset-4 decoration-dotted",
                pathname === href
                  ? "text-cyan-300 font-semibold"
                  : "text-gray-400"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-cyan-300">
                English
                <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-800 border border-gray-700 text-white">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Odia</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-cyan-300 hover:text-cyan-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700 shadow-md">
          <div className="container py-4 flex flex-col gap-2">
            {navLinks.map(({ href, label, icon }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-md p-3 text-base transition-colors hover:bg-gray-800 hover:text-cyan-300",
                  pathname === href
                    ? "bg-gray-800 text-cyan-300 font-semibold"
                    : "text-gray-400"
                )}
              >
                {icon}
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Ticker Below Header */}
      <AlertTicker />
    </header>
  );
}
