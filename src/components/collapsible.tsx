"use client";

import type { ComponentPropsWithRef } from "react";

import { Content } from "@radix-ui/react-collapsible";

import { cx } from "@/utilities/classname";

export {
  Root as Collapsible,
  Trigger as CollapsibleTrigger,
} from "@radix-ui/react-collapsible";

export type CollapsibleContentProps = ComponentPropsWithRef<typeof Content>;

export const CollapsibleContent = ({
  className,
  ...props
}: CollapsibleContentProps) => (
  <Content
    className={cx(
      "overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",
      className,
    )}
    {...props}
  />
);
