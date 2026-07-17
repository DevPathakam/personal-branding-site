import { VerticalMarquee } from "@/components/client/VerticalMarquee";
import { ScrollbarClasses, Skills } from "@/constants/portfolio";
import { Icon } from "@iconify/react";
import { PortfolioFooter } from "../../components/portfolio/PortFolioFooter";
import { Explorer } from "@/components/client/portfolio/Explorer";
import { Tabbar } from "@/components/client/portfolio/Tabbar";

import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        className={`flex flex-col h-screen w-screen overflow-hidden bg-brand-primary font-mono pb-16 ${jetBrainsMono.variable}`}
      >
        <div className="flex flex-1 w-full overflow-hidden">
          <aside className="bg-brand-primary-dark border-r border-r-brand-border">
            <VerticalMarquee className="px-3 flex flex-col gap-6  ">
              {Skills.map(
                (skill, idx) =>
                  skill.isFeatured && (
                    <Icon
                      key={`sidebar-skill-${idx}`}
                      icon={skill.icon ?? ""}
                      className="text-3xl"
                    />
                  ),
              )}
            </VerticalMarquee>
          </aside>

          <Explorer />

          <main className="flex-1 h-full flex flex-col overflow-hidden">
            <Tabbar />

            <div className={`flex-1 overflow-y-auto ${ScrollbarClasses}`}>
              {children}
            </div>
          </main>
        </div>
      </div>
      <PortfolioFooter />
    </>
  );
}
