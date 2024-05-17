import type { ComponentPropsWithoutRef } from "react";

export type IconProps = Omit<ComponentPropsWithoutRef<"svg">, "viewBox" | "xmlns">