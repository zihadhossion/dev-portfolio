import Hero from "@/components/Hero";
import SectionLayout from "@/components/SectionLayout";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white bg-black flex items-center justify-center flex-col overflow-hidden mx-auto px-5 sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <SectionLayout />
      </div>
    </main>
  );
}
