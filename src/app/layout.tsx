import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Cormorant_Garamond, DM_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";
import "./globals.css";

const body = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const mono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Seun Odusanya | Young Leader, Changemaker, International Speaker", template: "%s | Seun Odusanya" },
  description:
    "Oluseun (Seun) Odusanya is an award-winning British-Nigerian young leader and international speaker championing youth empowerment, gender equality and social impact.",
  openGraph: { type: "website", siteName: "Seun Odusanya", images: ["/images/portrait-blue.jpg"] },
};

export const viewport: Viewport = { themeColor: "#0b1719" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${body.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
