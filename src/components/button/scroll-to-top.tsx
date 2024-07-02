"use client";

import type { ComponentPropsWithRef } from "react";

export type ScrollToTopButtonProps = ComponentPropsWithRef<"button">;

export const ScrollToTopButton = ({
  onClick,
  ...props
}: ScrollToTopButtonProps) => (
  <button
    onClick={(event) => {
      document.documentElement.scrollIntoView({ behavior: "smooth" });
      onClick?.(event);
    }}
    {...props}
  />
);
