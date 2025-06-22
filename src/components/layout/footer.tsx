import React from "react";
import Link from "next/link";
import { Github, Wind } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-card ">
      <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">


          {/* Logo Section */}
          <div className="flex items-center space-x-2 ">
            <Wind className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">CycloneEye</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground  dark:text-black">
            © {new Date().getFullYear()} CycloneEye. Handcrafted With Care in India.
          </p>

          {/* Navigation Links */}
          <nav className="flex gap-4 sm:gap-6  dark:text-black">
            <Link href="/about">
              <span className="text-sm text-muted-foreground hover:text-primary transition-colors  dark:text-black">About</span>
            </Link>
            <Link href="/privacy">
              <span className="text-sm text-muted-foreground hover:text-primary transition-colors  dark:text-black">Privacy</span>
            </Link>
            <Link href="/disclaimer">
              <span className="text-sm text-muted-foreground hover:text-primary transition-colors  dark:text-black">Disclaimer</span>
            </Link>
          </nav>

          {/* GitHub Icon */}
          <a
            href="https://github.com/Ansorn07/Cyclone-Eye-Frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors  dark:text-black"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>

        </div>

        {/* Caution Note */}
        <div className="mt-8 text-center text-xs text-muted-foreground max-w-4xl mx-auto  dark:text-black">
          <p>
            <span className="font-semibold">A Word of Caution:</span> This website provides data for informational purposes only. It is not a substitute for official warnings. For your safety, please consult official government sources like the IMD for the most accurate and timely weather alerts. Stay safe.
          </p>
        </div>
      </div>
    </footer>
  );
}


