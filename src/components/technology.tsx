import type { ComponentPropsWithRef, ReactNode } from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/collapsible";
import { ChevronIcon } from "@/components/icons/chveron";
import { Link } from "@/components/link";

import { TECHNOLOGIES, type TechnologyName } from "@/constants/technologies";

import { cx, link } from "@/utilities/classname";

export type TechnologyProps = {
  children?: ReactNode;
  name: TechnologyName;
};

export type TechnologyCategoryProps = {
  children?: ReactNode;
  name:
    | "CI/CD"
    | "Collaboration"
    | "CMS"
    | "Databases"
    | "Frameworks"
    | "Languages"
    | "Libraries"
    | "Runtimes"
    | "State management"
    | "Styling"
    | "Testing"
    | "Tools"
    | "UI libraries"
    | "Version control";
};

export type TechnologyListProps = ComponentPropsWithRef<"ul">;

export type TechnologyListCollapsibleProps = {
  children?: ReactNode;
  text?: string;
};

export const TechnologyList = ({
  className,
  ...props
}: TechnologyListProps) => <ul className={cx("ps-0", className)} {...props} />;

export const Technology = ({ children, name }: TechnologyProps) => {
  const technology = TECHNOLOGIES[name];

  return (
    <li className="inline">
      {technology.url ? (
        <Link className={link()} href={technology.url} target="_blank">
          {name}
        </Link>
      ) : (
        name
      )}
      {children ? <> ({children})</> : null}
    </li>
  );
};

export const TechnologyCategory = ({
  children,
  name,
}: TechnologyCategoryProps) => (
  <li className="not-prose flex">
    <p className="w-[9em] shrink-0">{name}</p>
    <ul className="grow list-none flex-wrap text-balance text-gray-500 [&>li]:p-0 [&>li]:after:content-[',\0020'] last:[&>li]:after:content-none">
      {children}
    </ul>
  </li>
);

export const TechnologyListCollapsible = ({
  children,
  text,
}: TechnologyListCollapsibleProps) => (
  <Collapsible className="prose-sm">
    <CollapsibleTrigger className={link({ className: "group" })}>
      <span>{text ?? "Technology stack"}</span>
      <ChevronIcon className="inline-flex h-4 w-4 -rotate-180 transition group-data-[state=open]:rotate-0" />
    </CollapsibleTrigger>
    <CollapsibleContent>{children}</CollapsibleContent>
  </Collapsible>
);
