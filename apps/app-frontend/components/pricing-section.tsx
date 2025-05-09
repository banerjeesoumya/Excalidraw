"use client";

import { useState } from "react";
import { Button } from "@repo/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@repo/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Free",
    description: "Perfect for individuals and small projects",
    price: {
      monthly: "$0",
      yearly: "$0"
    },
    features: [
      "Basic drawing tools",
      "Up to 3 boards",
      "PNG & SVG export",
      "7-day history"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    description: "For professionals who need more power",
    price: {
      monthly: "$12",
      yearly: "$120"
    },
    features: [
      "All Free features",
      "Unlimited boards",
      "Real-time collaboration",
      "Version history",
      "Custom templates",
      "Priority support"
    ],
    cta: "Get Pro",
    popular: true
  },
  {
    name: "Team",
    description: "For teams that need to work together",
    price: {
      monthly: "$39",
      yearly: "$390"
    },
    features: [
      "All Pro features",
      "Team workspace",
      "Admin controls",
      "SSO authentication",
      "API access",
      "Dedicated support"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section 
      id="pricing" 
      className="py-24 bg-muted/30"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
          </div>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Choose the plan that works best for you or your team. All plans include a 14-day trial.
          </p>
          
          <div className="flex items-center gap-4 mt-6 bg-muted rounded-lg p-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-md ${
                billingCycle === "monthly" 
                  ? "bg-background shadow-sm" 
                  : "hover:bg-background/50"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-2 rounded-md ${
                billingCycle === "yearly" 
                  ? "bg-background shadow-sm" 
                  : "hover:bg-background/50"
              }`}
            >
              Yearly
              <span className="ml-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full px-2 py-0.5">
                Save 15%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`flex flex-col h-full transition-all ${
                plan.popular 
                  ? "border-primary shadow-lg shadow-primary/10 relative" 
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium py-1 px-3 rounded-full">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price[billingCycle]}</span>
                  {plan.name !== "Free" && (
                    <span className="text-muted-foreground ml-1">/{billingCycle === "monthly" ? "mo" : "yr"}</span>
                  )}
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/signup" className="w-full">
                  <Button 
                    variant={plan.popular ? "default" : "outline"} 
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}