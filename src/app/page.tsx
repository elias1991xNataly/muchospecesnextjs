import Image from "next/image";
import NavBar from "../app/components/NavBar";
import HeroSection from "../app/components/HeroSection";
import WhoWeare from "../app/components/WhoWeare";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="container mt-24 pt-7">
        <HeroSection />
        <WhoWeare/>
      </div>
    </main>
  );
}
