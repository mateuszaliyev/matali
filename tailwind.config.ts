import tailwindCssTypographyPlugin from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import { slate as gray } from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

const tailwindCssConfig: Config = {
  content: ["./src/**/*.{js,jsx,mdx,ts,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [tailwindCssTypographyPlugin],
  theme: {
    extend: {
      colors: {
        gray,
      },
      fontFamily: {
        sans: ["var(--font-jost)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};

export default tailwindCssConfig;
