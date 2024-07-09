import type { ReactNode } from "react";

import { Link } from "@/components/link";

import { container, prose } from "@/utilities/classname";

export type TimelineProps = {
  children?: ReactNode;
};

export type TimelineEntryProps = {
  children?: ReactNode;
  from: number;
  position?: string;
  title: string;
  to?: number;
  url?: string;
};

export const Timeline = ({ children }: TimelineProps) => (
  <section>
    <div
      className={container({
        className: prose({ className: "prose-h3:mb-0" }),
      })}
    >
      <h2>My timeline</h2>
      {children}
    </div>
  </section>
);

export const TimelineEntry = ({
  children,
  from,
  title,
  position,
  to,
  url,
}: TimelineEntryProps) => (
  <>
    <hr className="first-of-type:hidden" />
    <h3>
      {url ? (
        <Link href={url} target="_blank">
          {title}
        </Link>
      ) : (
        title
      )}
    </h3>
    <span className="text-sm text-gray-500">
      {position}
      {position ? ", " : ""}
      {from}
      {from !== to ? "–" : ""}
      {from !== to && (to ?? "present")}
    </span>
    {children}
  </>
);
