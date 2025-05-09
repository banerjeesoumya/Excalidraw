import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { FeaturesSection } from "@/components/features-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { PricingSection } from "@/components/pricing-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { CallToAction } from "@/components/call-to-action";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-1 pt-12">
        <Hero />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <CallToAction />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}