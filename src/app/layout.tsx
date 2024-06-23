import type { Metadata } from "next";
import Sidebar from "@/components/Layouts/Sidebar";
import "./globals.css";
import "./slide.css"
import "@/assets/Inter/stylesheet.css";
export const metadata: Metadata = {
  title: "HR-Test",
  description: "Custom Carousel T3 App Testing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body>
        <div className="flex h-screen flex-row sm:overflow-hidden bg-hero-image3 bg-no-repeat bg-cover">
          <div className="w-16 flex-none sm:w-72">
            <Sidebar />
          </div>
          <div className="flex-grow overflow-y-auto">
          {children}
          </div>
        </div>
      </body>
    </html>
  );
}
