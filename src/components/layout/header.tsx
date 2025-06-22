"use client";

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
    <header className="sticky top-0 z-50 w-full border-b bg-card">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <Wind className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">CycloneEye</span>
          </Link>
        </div>
        <nav className="hidden md:flex md:items-center md:gap-6 text-sm">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === href ? "text-primary font-semibold" : "text-foreground/70"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                English
                <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Odia</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t">
          <div className="container pb-4 pt-2 flex flex-col gap-1">
            {navLinks.map(({ href, label, icon }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-md p-2 text-base transition-colors hover:bg-accent hover:text-accent-foreground",
                  pathname === href ? "bg-accent text-accent-foreground" : "text-foreground/70"
                )}
              >
                {icon}
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
      <AlertTicker />
    </header>
  );
}
