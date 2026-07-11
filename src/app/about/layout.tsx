import { Saira_Stencil_One } from "next/font/google";

const sairaStencilOne = Saira_Stencil_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-saira-stencil-one",
});

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`h-full bg-amber-50 text-gray-800 ${sairaStencilOne.className}`}
    >
      {children}
    </div>
  );
}
