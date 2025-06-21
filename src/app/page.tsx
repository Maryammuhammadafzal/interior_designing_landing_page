import Image from "next/image";
import HeroPage from "./hero/page";

export default function Home() {
  return (
    <div className="flex w-full h-full flex-col gap-10">
<HeroPage/>
    </div>
  );
}
