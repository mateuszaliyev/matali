import type { VariantProps } from "cva";

import type { IconProps } from "@/types";

import { cva } from "@/utilities/classname";

export type ChevronDiagonalIconProps = IconProps &
  VariantProps<typeof chevronDiagonalIcon>;

const chevronDiagonalIcon = cva({
  variants: {
    link: {
      true: "mb-0.5 ml-1 inline-flex h-4 w-4",
    },
  },
});

export const ChevronDiagonalIcon = ({
  className,
  fill = "currentColor",
  link,
  ...props
}: ChevronDiagonalIconProps) => (
  <svg
    className={chevronDiagonalIcon({ className, link })}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z" />
  </svg>
);
