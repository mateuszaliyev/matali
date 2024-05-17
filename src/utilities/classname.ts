import { defineConfig } from "cva";

export type { VariantProps } from "cva";

export const { compose, cva, cx } = defineConfig();

export const container = cva({ base: "mx-auto w-full max-w-screen-sm px-4" });

export const link = cva({
  base: "text-gray-950 underline decoration-gray-300 underline-offset-2 [text-decoration-thickness:.1em]",
  variants: {
    external: {
      true: "flex items-center gap-1",
    },
  },
});

export const prose = cva({
  base: "inherit prose prose-headings:font-normal prose-headings:text-gray-700 prose-p:text-gray-500 prose-a:font-normal prose-a:text-gray-950 prose-a:decoration-gray-300 prose-a:underline-offset-2 prose-a:[text-decoration-thickness:.1em] prose-li:text-gray-500 prose-hr:my-8",
});
