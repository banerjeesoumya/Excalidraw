"use client";

import { useState, useEffect } from "react";
import { TESTIMONIALS } from "@/lib/constants";
import { Card, CardContent } from "@repo/ui/card";
import { cn } from "@repo/ui/utils";
import { QuoteIcon } from "lucide-react";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="testimonials" 
      className="py-24 bg-background"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What People Say</h2>
          </div>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Hear from our users about how our tool has transformed their workflow.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-6 left-4 text-primary/20">
            <QuoteIcon className="h-20 w-20" />
          </div>
          
          <div className="overflow-hidden relative py-8">
            <div 
              className="transition-all duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-none shadow-none bg-transparent">
                    <CardContent className="pt-6">
                      <p className="text-xl md:text-2xl italic mb-6 text-foreground/90">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex flex-col">
                        <span className="font-semibold">{testimonial.author}</span>
                        <span className="text-sm text-muted-foreground">{testimonial.role}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all",
                  index === activeIndex ? "bg-primary w-6" : "bg-primary/20"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}