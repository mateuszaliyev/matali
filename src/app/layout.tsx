import type { ReactNode } from "react";

import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";

import { GradientCyanSkyBlue } from "@/components/gradient/cyan-sky-blue";

import { environment } from "@/environment.mjs";

import { container, cx, link } from "@/utilities/classname";

import "./style.css";

import { ScrollToTopButton } from "@/components/button/scroll-to-top";

type RootLayoutProps = {
  children: ReactNode;
};

const description: Metadata["description"] =
  "I'm a frontend developer from Rzeszów, Poland, on a mission to build applications users love.";

const title: Metadata["title"] = {
  default: "Mateusz Aliyev",
  template: "%s | Mateusz Aliyev",
};

export const metadata: Metadata = {
  description,
  metadataBase: new URL(environment.NEXT_PUBLIC_BASE_URL),
  openGraph: {
    description,
    locale: "en_US",
    siteName: "Mateusz Aliyev",
    title,
    type: "website",
    url: "/",
  },
  robots: {
    follow: false,
    googleBot: {
      follow: false,
      index: false,
      indexifembedded: false,
      "max-image-preview": "none",
      noarchive: true,
      nocache: true,
      noimageindex: true,
      nositelinkssearchbox: true,
      nosnippet: true,
      notranslate: true,
    },
    index: false,
    indexifembedded: false,
    "max-image-preview": "none",
    noarchive: true,
    nocache: true,
    noimageindex: true,
    nositelinkssearchbox: true,
    nosnippet: true,
    notranslate: true,
  },
  title,
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

const RootLayout = ({ children }: RootLayoutProps) => (
  <html className={cx("scroll-smooth", jost.variable)} lang="en">
    <body className="bg-white text-gray-500 antialiased selection:bg-sky-500 selection:text-white">
      {children}
      <footer>
        <div
          className={container({
            className: "mt-32 flex items-center justify-between pb-16 text-sm",
          })}
        >
          <p>&copy; {new Date().getFullYear()} Mateusz Aliyev</p>
          <ScrollToTopButton className={link()}>
            Scroll to Top
          </ScrollToTopButton>
        </div>
      </footer>
      <svg
        aria-hidden
        className="h-0 w-0"
        viewBox="0 0 1 1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <GradientCyanSkyBlue id="gradient-cyan-sky-blue" />
        </defs>
      </svg>
    </body>
  </html>
);

export default RootLayout;
