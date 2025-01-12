import type { ComponentPropsWithRef } from "react";

import { ArrowDiagonalIcon } from "@/components/icons/arrow";
import { Link } from "@/components/link";

import { environment } from "@/environment.mjs";

import { container, link } from "@/utilities/classname";

export type HomePageHeaderProps = Omit<
  ComponentPropsWithRef<"header">,
  "children"
>;

const HOME_PAGE_HEADER_LINKS: { name: string; url: string }[] = [
  { name: "Email", url: `mailto:${environment.NEXT_PUBLIC_EMAIL_ADDRESS}` },
  { name: "GitHub", url: "/github" },
  { name: "LinkedIn", url: "/linkedin" },
];

export const HomePageHeader = (props: HomePageHeaderProps) => (
  <header {...props}>
    <div className={container()}>
      <h1 className="bg-gradient-to-b from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-3xl leading-none text-transparent">
        Mateusz Aliyev
      </h1>
      <p className="text-lg text-gray-400">Frontend Developer</p>
      <p className="mt-8 text-balance text-xl">
        I&apos;m a software engineer from Poland, with expertise in frontend development.
      </p>
      <ul className="mt-8 flex items-center gap-4">
        {HOME_PAGE_HEADER_LINKS.map(({ name, url }) => (
          <li key={name}>
            <Link className={link()} href={url} target="_blank">
              {name}
              <ArrowDiagonalIcon link />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </header>
);
