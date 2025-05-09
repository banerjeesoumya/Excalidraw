"use client";

import { useState } from "react";
import { Button } from "@repo/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-excali-blue">
                Excalidraw
              </span>
            </a>
            <nav className="hidden md:ml-10 md:flex md:items-center md:space-x-4">
              <a
                href="#features"
                className="text-foreground hover:text-excali-purple px-3 py-2 rounded-md text-sm font-medium"
              >
                Features
              </a>
              <a
                href="#templates"
                className="text-foreground hover:text-excali-purple px-3 py-2 rounded-md text-sm font-medium"
              >
                Templates
              </a>
              <a
                href="#pricing"
                className="text-foreground hover:text-excali-purple px-3 py-2 rounded-md text-sm font-medium"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-excali-purple px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/signin">
              <Button variant="outline" className="rounded-full">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="rounded-full bg-excali-blue hover:bg-excali-blue/80">
                Try Now
              </Button>
            </Link>
          </div>
          <div className="flex md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#features"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-excali-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#templates"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-excali-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              Templates
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-excali-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-excali-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </div>
          <div className="px-5 pt-4 pb-6 space-y-3">
            <Button variant="outline" className="w-full rounded-full">
              Login
            </Button>
            <Button className="w-full rounded-full bg-excali-blue hover:bg-excali-blue/80">
              Try Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}