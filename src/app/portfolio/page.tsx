import { IntroCardTitle } from "@/components/client/portfolio/IntroCardTitle";
import { SocialLink } from "@/components/portfolio/SocialLink";
import { SocialLinks as socialLinks } from "@/constants/portfolio";
export default function PortfolioPage() {
  return (
    <div className="container mx-auto font-jetbrains-mono flex flex-col items-center justify-center min-h-screen max-h-screen gap-5 overflow-hidden text-brand-primary-deep-dark font-bold ">
      {/* Intro Card */}
      <div className="bg-brand-primary-deep-dark border-2 border-brand-primary-deep-dark rounded-4xl text-brand-primary-highlight flex flex-col items-center justify-center gap-5 p-20">
        <section about="name">
          <h2 className="text-6xl font-bold">Aman Pathak</h2>
        </section>

        <section about="title">
          <IntroCardTitle />
        </section>

        <hr className="border-2 w-100 rounded-4xl border-brand-secondary" />

        <div className="text-center w-150">
          <p>
            I craft clean, performant web applications with modern technologies.
            Specialized in TypeScript, React, Node.js, and building products
            that users love.
          </p>
        </div>
      </div>

      {/* Contact and Social links */}
      <section about="contact">
        <div className="text-sm flex gap-2 border border-brand-border bg-brand-primary-deep-dark p-4 rounded-2xl shadow-2xl text-amber-50">
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
