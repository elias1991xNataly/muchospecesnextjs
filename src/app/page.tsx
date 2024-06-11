import Image from "next/image";
import NavBar from "../app/components/NavBar";
import HeroSection from "../app/components/HeroSection";
import WhoWeare from "../app/components/WhoWeare";
import BestForYourChildren from "../app/components/BestForYourChildren"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="container gap-20 mt-24 pt-7 w-screen">
        <HeroSection />
        <WhoWeare/>
        <BestForYourChildren/>
      </div>
    </main>
  );
}
