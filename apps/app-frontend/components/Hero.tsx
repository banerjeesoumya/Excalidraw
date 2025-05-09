"use client";

import { useEffect, useState } from "react";
import { Button } from "@repo/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { APP_DESCRIPTION } from "@/lib/constants";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background hero-gradient">
      <div className="container px-4 md:px-6 py-10 relative z-10">
        <div 
          className={`space-y-8 text-center transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center justify-center p-1 mb-4 rounded-full bg-secondary/80 backdrop-blur-sm">
            <span className="px-3 py-1 text-sm font-medium">
              ✨ Welcome to the future of collaborative drawing
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl mx-auto">
            Visualize Your Ideas With{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500">
              Collaborative Drawing
            </span>
          </h1>
          
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
            {APP_DESCRIPTION}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto text-base px-6 py-4 group bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 hover:opacity-90">
                Start Drawing Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-6 py-4">
                See Examples
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="relative mt-16 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-border">
            {/* Mock Canvas header */}
            <div className="border-b border-border p-3 flex items-center justify-between bg-muted/30">
              <div className="flex space-x-2 items-center">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
              </div>
              <div className="h-6 w-32 bg-muted rounded-md"></div>
              <div className="flex space-x-2">
                <div className="h-6 w-6 rounded-md bg-muted"></div>
                <div className="h-6 w-6 rounded-md bg-muted"></div>
              </div>
            </div>
            {/* Canvas illustration with SVG drawings */}
            <div className="relative h-[340px] md:h-[460px] bg-dot-pattern p-6">
              <svg className="absolute w-full h-full" viewBox="0 0 800 500">
                {/* Example SVG drawings that appear to be hand-drawn */}
                <path 
                  d="M200,150 Q300,50 400,150 T600,150" 
                  fill="none" 
                  stroke="#3D5AF1" 
                  strokeWidth="3" 
                  className="animate-draw"
                  strokeDasharray="1000"
                />
                <rect 
                  x="150" 
                  y="200" 
                  width="200" 
                  height="150" 
                  rx="10" 
                  fill="none" 
                  stroke="#9B87F5" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  className="animate-draw"
                  strokeDasharray="1000"
                  style={{ animationDelay: "0.5s" }}
                />
                <circle 
                  cx="500" 
                  cy="250" 
                  r="80" 
                  fill="none" 
                  stroke="#D6BCFA" 
                  strokeWidth="3" 
                  className="animate-draw"
                  strokeDasharray="1000"
                  style={{ animationDelay: "1s" }}
                />
                <path 
                  d="M350,350 L450,350 L450,400 L500,400" 
                  fill="none" 
                  stroke="#3D5AF1" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  markerEnd="url(#arrow)"
                  className="animate-draw"
                  strokeDasharray="1000"
                  style={{ animationDelay: "1.5s" }}
                />
                <defs>
                  <marker 
                    id="arrow" 
                    markerWidth="10" 
                    markerHeight="10" 
                    refX="9" 
                    refY="3" 
                    orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill="#3D5AF1" />
                  </marker>
                </defs>
              </svg>
            </div>
            {/* Toolbar */}
            <div className="absolute top-1/4 left-4 bg-background/80 backdrop-blur-sm border border-border p-2 rounded-lg shadow-lg">
              <div className="flex flex-col space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-8 w-8 rounded bg-muted flex items-center justify-center">
                    <div className="h-4 w-4 rounded-sm bg-foreground/30"></div>
                  </div>
                ))}
              </div>
              {/* Floating elements for visual interest */}
              <div className="absolute -right-10 -top-10 h-24 w-24 bg-excali-blue/10 dark:bg-excali-blue/20 rounded-full blur-2xl"></div>
              <div className="absolute -left-10 -bottom-10 h-32 w-32 bg-excali-purple/10 dark:bg-excali-purple/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>    
      </div>
    </section>
  );
}