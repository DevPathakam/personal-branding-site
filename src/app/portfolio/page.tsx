import { IntroCardTitle } from "@/components/client/portfolio/IntroCardTitle";
import { SocialLink } from "@/components/portfolio/SocialLink";
import { SocialLinks as socialLinks } from "@/constants/portfolio";
export default function PortfolioPage() {
  return (
    <div className="container mx-auto font-jetbrains-mono flex flex-col items-center justify-center min-h-full py-8 px-4 gap-5 text-brand-primary-deep-dark font-bold">
      {/* Intro Card */}
      <div className="w-full max-w-2xl bg-brand-primary-deep-dark border-2 border-brand-primary-deep-dark rounded-3xl md:rounded-4xl text-brand-primary-highlight flex flex-col items-center justify-center gap-5 p-6 md:p-20">
        <section about="name">
          <h2 className="text-4xl md:text-6xl font-bold text-center">Aman Pathak</h2>
        </section>

        <section about="title">
          <IntroCardTitle />
        </section>

        <hr className="border-2 w-32 md:w-100 max-w-full rounded-4xl border-brand-secondary" />

        <div className="text-center w-full max-w-lg">
          <p className="text-sm md:text-base font-medium">
            I craft clean, performant web applications with modern technologies.
            Specialized in TypeScript, React, Node.js, and building products
            that users love.
          </p>
        </div>
      </div>

      {/* Contact and Social links */}
      <section about="contact" className="w-full max-w-2xl">
        <div className="text-sm flex flex-wrap justify-center gap-2 md:gap-4 border border-brand-border bg-brand-primary-deep-dark p-4 rounded-2xl shadow-2xl text-amber-50">
          {socialLinks?.map(
            (link, idx: number) =>
              link.visible && (
                <SocialLink
                  key={`social-link-${idx}`}
                  href={link.href}
                  icon={link.icon}
                  text={link.text}
                />
              ),
          )}
        </div>
      </section>
    </div>
  );
}
