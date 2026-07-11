import Image from "next/image";
import PopArt from "../assets/PopArt.png";
import BgImg from "../assets/BgImg.png";
import { BouncingElement } from "@/components/client/BouncingElement";
import Link from "next/link";
// import NoBg from "../assets/no bg.png";
//import YellowBg from "../assets/yellow bg.jpg";

export default function HomePage() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <div
        className="flex flex-col flex-1 items-center justify-center relative z-10 h-screen"
        style={{ backgroundColor: "#FD684A" }}
      >
        <BouncingElement>
          <Image
            src={PopArt}
            alt="herro"
            className="border-8 border-[#0D1141] rounded-full shadow-2xl min-h-96 max-h-96 min-w-96 max-w-96"
          />
        </BouncingElement>
        <div className="flex gap-4">
          {[
            { name: "About", href: "/about" },
            { name: "Portfolio", href: "/portfolio" },
          ].map((page, idx) => (
            <Link
              key={`page-link-button-${idx}`}
              className="bg-brand-primary text-amber-50 font-bold px-3 py-2 rounded-2xl border-brand-primary-deep-dark hover:cursor-pointer shadow-2xs"
              href={page.href}
            >
              {page.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
