import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elevare School Intelligence",
  description:
    "AI-enabled evaluation ecosystems for premium urban schools.",
  metadataBase: new URL("https://elevaresi.com"),
  openGraph: {
    title: "Elevare School Intelligence",
    description:
      "AI-enabled evaluation ecosystems for premium urban schools.",
    url: "https://elevaresi.com",
    siteName: "Elevare School Intelligence",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Elevare School Intelligence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevare School Intelligence",
    description:
      "AI-enabled evaluation ecosystems for premium urban schools.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}