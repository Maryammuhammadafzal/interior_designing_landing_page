import Image from "next/image";
import HeroPage from "./hero/page";
import AboutPage from "./about/page";
import ServicesPage from "./services/page";

export default function Home() {
  return (
    <div className="flex w-full h-full flex-col gap-10">
      <HeroPage />
      <AboutPage />
      <ServicesPage />
    </div>
  );
}
