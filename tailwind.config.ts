import tailwindCssTypographyPlugin from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import tailwindCssAnimate from "tailwindcss-animate";
import { slate as gray } from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

const tailwindCssConfig: Config = {
  content: ["./src/**/*.{js,jsx,mdx,ts,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [tailwindCssAnimate, tailwindCssTypographyPlugin],
  theme: {
    extend: {
      animation: {
        "collapsible-down": "collapsible-down 0.3s ease-out",
        "collapsible-up": "collapsible-up 0.3s ease-out",
      },
      colors: {
        gray,
      },
      fontFamily: {
        sans: ["var(--font-jost)", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
    },
  },
};

export default tailwindCssConfig;
