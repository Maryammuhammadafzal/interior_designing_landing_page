import Image from "next/image";
import HeroPage from "./hero/page";
import AboutPage from "./about/page";
import ServicesPage from "./services/page";
import PromisePage from "./promises/page";
import PortfolioPage from "./portfolio/page";

export default function Home() {
  return (
    <div className="flex w-full h-full flex-col gap-10">
      <HeroPage />
      <AboutPage />
      <ServicesPage />
      <PromisePage />
      <PortfolioPage/>
    </div>
  );
}
