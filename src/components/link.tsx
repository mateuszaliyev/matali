import { forwardRef, type AnchorHTMLAttributes } from "react";

import {
  default as NextLink,
  type LinkProps as NextLinkProps,
} from "next/link";

export type LinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof NextLinkProps
> &
  NextLinkProps;

const NOREFERRER = "noreferrer";

const noReferrerRel = (href: LinkProps["href"], rel: LinkProps["rel"]) => {
  if (
    typeof href === "string" &&
    (href.startsWith("/") || href.startsWith("#"))
  ) {
    return rel;
  }

  if (rel?.split(" ").includes(NOREFERRER)) {
    return rel;
  }

  return rel ? `${rel} ${NOREFERRER}` : NOREFERRER;
};

const shouldUseNextLink = (href: Extract<LinkProps["href"], string>) =>
  href.startsWith("/") &&
  !href.startsWith("/github") &&
  !href.startsWith("/linkedin");

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, rel, ...props }, ref) => {
    if (typeof href === "string" && !shouldUseNextLink(href)) {
      return (
        <a href={href} ref={ref} rel={noReferrerRel(href, rel)} {...props} />
      );
    }

    return (
      <NextLink
        href={href}
        ref={ref}
        rel={noReferrerRel(href, rel)}
        {...props}
      />
    );
  },
);

Link.displayName = NextLink.displayName;
