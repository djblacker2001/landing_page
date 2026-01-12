import { Hero } from "@/components/Hero";
import { Vision } from "@/components/Vision";
import { Pillars } from "@/components/Pillars";
import { Solution } from "@/components/Solution";
import { Impact } from "@/components/Impact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Vision />
      <Pillars />
      <Solution />
      <Impact />
    </main>
  );
}
