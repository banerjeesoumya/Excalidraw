// import { FEATURES } from "@/lib/constants";
import { Card, CardContent } from "@repo/ui/card";
// import { cn } from "@repo/ui/utils";
import { Check } from "lucide-react";
import { Pencil, Users, Download, Layout } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <Card className="border border-border bg-background hover:shadow-md transition-shadow duration-300">
      <CardContent className="pt-6">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          {icon}
        </div>
        <h3 className="mb-2 text-xl font-medium">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export function FeaturesSection() {
  const features = [
    {
      title: "Real-time Collaboration",
      description: "Work together with your team in real-time, no matter where they are located.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
          <path d="M17 20H14V17C14 16.4477 13.5523 16 13 16H11C10.4477 16 10 16.4477 10 17V20H7V12H5L12 5L19 12H17V20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Hand-drawn Style",
      description: "Create diagrams that look like they were sketched by hand for a more authentic feel.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
          <path d="M8 20L16 4M12.5 8.5C12.5 8.5 11 10.5 9 10.5C7 10.5 5 8.5 5 8.5C5 8.5 7 6.5 9 6.5C11 6.5 12.5 8.5 12.5 8.5ZM19 15.5C19 15.5 17 17.5 15 17.5C13 17.5 11 15.5 11 15.5C11 15.5 13 13.5 15 13.5C17 13.5 19 15.5 19 15.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Export & Share",
      description: "Export your diagrams as PNG, SVG or share them with a single link.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
          <path d="M8.5 14L4 17.5L8.5 21M15.5 14L20 17.5L15.5 21M20 6.5H4M20 10.5H4M20 14.5H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Libraries & Templates",
      description: "Access a wide range of pre-made components and templates to speed up your work.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
          <path d="M19 11H5M19 11C19.5523 11 20 11.4477 20 12V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V12C4 11.4477 4.44772 11 5 11M19 11V9C19 8.44772 18.5523 8 18 8M5 11V9C5 8.44772 5.44772 8 6 8M18 8V6C18 5.44772 17.5523 5 17 5H7C6.44772 5 6 5.44772 6 6V8M18 8H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Infinite Canvas",
      description: "Never run out of space with our infinite canvas that expands as you create.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
          <path d="M15 3H21V9M21 3L13 11M9 21H3V15M3 21L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Privacy-Focused",
      description: "Your data stays on your device. We don't store your drawings on our servers.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
          <path d="M12 15V17M6 21H18C19.1046 21 20 20.1046 20 19V13C20 11.8954 19.1046 11 18 11H6C4.89543 11 4 11.8954 4 13V19C4 20.1046 4.89543 21 6 21ZM16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11H16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">
            Powerful Features for Visual Thinkers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to brainstorm, plan, and communicate your ideas clearly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>

        {/* Feature highlight section */}
        <div className="mt-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Seamless Collaboration, <span className="gradient-heading">No Matter Where You Are</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Work together with your team in real-time. See changes as they happen and
                communicate ideas instantly without interruption.
              </p>
              <ul className="space-y-3">
                {[
                  "Real-time cursor tracking",
                  "Instant changes visible to all participants",
                  "Built-in chat and commenting",
                  "No account required to collaborate"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-excali-blue mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background p-4 rounded-xl border border-border shadow-lg">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Collaboration illustration */}
                  <svg width="280" height="180" viewBox="0 0 280 180" className="opacity-80">
                    <rect x="40" y="40" width="200" height="100" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="80" cy="70" r="10" fill="#3D5AF1" opacity="0.7" />
                    <circle cx="180" cy="100" r="10" fill="#9B87F5" opacity="0.7" />
                    <circle cx="140" cy="60" r="10" fill="#D6BCFA" opacity="0.7" />
                    <path d="M80,70 Q120,20 140,60" fill="none" stroke="#3D5AF1" strokeWidth="2" />
                    <path d="M140,60 Q160,80 180,100" fill="none" stroke="#9B87F5" strokeWidth="2" />
                  </svg>
                  
                  {/* Animated cursors */}
                  <div className="absolute h-6 w-6 left-custom-left top-custom-top animate-float" style={{ animationDelay: "0s" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5,2 L19,12 L12,13 L9,21 L5,2Z" />
                    </svg>
                  </div>
                  <div className="absolute h-6 w-6 right-1/3 bottom-1/3 animate-float" style={{ animationDelay: "1s" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5,2 L19,12 L12,13 L9,21 L5,2Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}