import { SocialLink } from "@/components/portfolio/SocialLink";
import { SocialLinks as socialLinks } from "@/constants/portfolio";
export default function PortfolioPage() {
  return (
    <div className="container mx-auto font-jetbrains-mono flex flex-col items-center justify-center min-h-screen max-h-screen gap-5 overflow-hidden text-gray-500 ">
      {/* Title */}
      <section about="title">
        <h2 className="text-6xl font-bold">Aman Pathak</h2>
      </section>

      {/* Subtitle */}
      <section about="subtitle">
        <h2 className="text-4xl font-bold">Sr. Frontend Developer</h2>
      </section>

      <hr className="border w-100 border-brand-secondary" />

      {/* What I do */}
      <div className="text-center w-150">
        <p>
          I craft clean, performant web applications with modern technologies.
          Specialized in TypeScript, React, Node.js, and building products that
          users love.
        </p>
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

          {/* <div>
            <p>{"{"}</p>
            {socialLinks?.map(
              (link, idx: number) =>
                link.visible && (
                  <p key={`social-link-${idx}`} className="pl-4">
                    {link.name}: {link.text}
                  </p>
                ),
            )}
            <p>{"}"}</p>
          </div> */}
        </div>
      </section>
    </div>
  );
}
