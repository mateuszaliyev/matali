import type { ComponentPropsWithRef } from "react";

import { ArrowDiagonalIcon } from "@/components/icons/arrow";
import { Link } from "@/components/link";

import { environment } from "@/environment.mjs";

import { container, link } from "@/utilities/classname";

export type HomePageHeaderProps = Omit<
  ComponentPropsWithRef<"header">,
  "children"
>;

export const HomePageHeader = (props: HomePageHeaderProps) => (
  <header {...props}>
    <div className={container()}>
      <h1 className="bg-gradient-to-b from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-3xl leading-none text-transparent">
        Mateusz Aliyev
      </h1>
      <p className="text-lg text-gray-400">Frontend Developer</p>
      <p className="mt-8 text-balance text-xl">
        I&apos;m a frontend developer from Poland, on a mission to build
        applications users love.
      </p>
      <ul className="mt-8 flex items-center gap-4">
        <li>
          <Link
            className={link()}
            href={`mailto:${environment.NEXT_PUBLIC_EMAIL_ADDRESS}`}
            target="_blank"
          >
            Email
            <ArrowDiagonalIcon link />
          </Link>
        </li>
        <li>
          <Link className={link()} href="/github" target="_blank">
            GitHub
            <ArrowDiagonalIcon link />
          </Link>
        </li>
        <li>
          <Link className={link()} href="/linkedin" target="_blank">
            LinkedIn
            <ArrowDiagonalIcon link />
          </Link>
        </li>
      </ul>
    </div>
  </header>
);
