import type { IconProps } from "@/types";

export const ChevronDiagonalIcon = ({fill = "currentColor", ...props}:IconProps) => (
  <svg fill={fill} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"{...props}><path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z" /></svg>
)