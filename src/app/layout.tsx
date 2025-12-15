import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Z360 Virtual Tours | Professional 360° Virtual Tour Services",
    template: "%s | Z360 Virtual Tours",
  },
  description:
    "Transform your spaces into immersive 360° virtual experiences. Professional virtual tour services for real estate, hospitality, businesses, and more. Compatible with Matterport, CloudPano, Kuula, and other platforms.",
  keywords: [
    "virtual tours",
    "360 photography",
    "matterport tours",
    "cloudpano",
    "real estate virtual tours",
    "business virtual tours",
    "3D tours",
    "immersive experiences",
    "360 degree photos",
    "virtual tour company",
  ],
  authors: [{ name: "Z360 Virtual Tours" }],
  creator: "Z360 Virtual Tours",
  publisher: "Z360 Virtual Tours",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://z360virtualtours.com",
    siteName: "Z360 Virtual Tours",
    title: "Z360 Virtual Tours | Professional 360° Virtual Tour Services",
    description:
      "Transform your spaces into immersive 360° virtual experiences. Professional virtual tour services for real estate, hospitality, businesses, and more.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Z360 Virtual Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Z360 Virtual Tours | Professional 360° Virtual Tour Services",
    description:
      "Transform your spaces into immersive 360° virtual experiences. Professional virtual tour services for all industries.",
    images: ["/images/twitter-image.jpg"],
    creator: "@z360tours",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-white text-slate-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
