import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  );
}