import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative h-screen text-white bg-black flex items-center justify-center flex-col overflow-hidden mx-auto px-5 sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[{ name: "Home", link: "#", icon: <FaHome /> }]}
        />
        <Hero />
      </div>
    </main>
  );
}
