import type { Metadata, Viewport } from "next";
import { Poppins, Cuprum } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const cuprum = Cuprum({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cuprum",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090e17",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vantix-digital.netlify.app"),
  title: "Vantix Digital — Smart Digital Solutions for Modern Brands",
  description: "Vantix Digital is a results-driven digital agency helping startups, businesses, and modern brands grow through website development, UI/UX design, SEO, and digital strategy.",
  keywords: [
    "Vantix Digital",
    "Digital Agency",
    "Website Development",
    "Next.js Developer",
    "UI/UX Design",
    "SEO Services",
    "Guest Posting",
    "Manchester Digital Agency"
  ],
  authors: [{ name: "Vantix Digital" }],
  openGraph: {
    title: "Vantix Digital — Smart Digital Solutions for Modern Brands",
    description: "Results-driven digital agency building powerful websites, modern UI/UX design, and sustainable digital growth.",
    url: "https://vantix-digital.netlify.app",
    siteName: "Vantix Digital",
    images: [
      {
        url: "/Header.png",
        width: 1200,
        height: 630,
        alt: "Vantix Digital Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${cuprum.variable} scroll-smooth dark`}>
      <body className="min-h-screen bg-[#090e17] text-slate-100 antialiased selection:bg-emerald-500 selection:text-white flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
