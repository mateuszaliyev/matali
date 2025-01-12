import { Link } from "@/components/link";
import {
  Technology,
  TechnologyCategory,
  TechnologyList,
  TechnologyListCollapsible,
} from "@/components/technology";
import { Timeline, TimelineEntry } from "@/components/timeline";

import { environment } from "@/environment.mjs";

export const Activities = () => {
  const spacetagUrl = new URL(environment.NEXT_PUBLIC_BASE_URL);
  spacetagUrl.hostname = [
    "spacetag",
    spacetagUrl.hostname.split(".").slice(-2),
  ].join(".");

  return (
    <Timeline>
      <h2>Activities</h2>
      <TimelineEntry
        from={2022}
        position="Team 500 ISS"
        title="NASA Space Apps Challenge"
        to={2022}
        url="https://spaceappschallenge.org/"
      >
        <p>
          I led the team that in 28 hours managed to build a 3D satellite
          tracking web application called{" "}
          <Link href={spacetagUrl.toString()} target="_blank">
            SpaceTag
          </Link>
          , which was awarded by{" "}
          <Link href="https://ses.com/" target="_blank">
            SES
          </Link>{" "}
          – one of the world&apos;s leading satellite owners and operators.
        </p>
        <TechnologyListCollapsible>
          <TechnologyList>
            <TechnologyCategory name="Languages">
              <Technology name="HTML" />
              <Technology name="CSS" />
              <Technology name="JavaScript" />
              <Technology name="TypeScript" />
            </TechnologyCategory>
            <TechnologyCategory name="Runtimes">
              <Technology name="Node.js" />
            </TechnologyCategory>
            <TechnologyCategory name="Frameworks">
              <Technology name="React" />
              <Technology name="Next.js">Pages Router</Technology>
            </TechnologyCategory>
            <TechnologyCategory name="Styling">
              <Technology name="Tailwind CSS" />
            </TechnologyCategory>
            <TechnologyCategory name="UI libraries">
              <Technology name="Headless UI" />
            </TechnologyCategory>
            <TechnologyCategory name="State management">
              <Technology name="Zustand" />
              <Technology name="React Hook Form" />
              <Technology name="TanStack Query">React Query</Technology>
            </TechnologyCategory>
            <TechnologyCategory name="Libraries">
              <Technology name="Three.js" />
              <Technology name="React Three Fiber" />
              <Technology name="tRPC" />
            </TechnologyCategory>
            <TechnologyCategory name="Version control">
              <Technology name="Git" />
              <Technology name="GitHub" />
            </TechnologyCategory>
            <TechnologyCategory name="CI/CD">
              <Technology name="Vercel" />
            </TechnologyCategory>
            <TechnologyCategory name="Tools">
              <Technology name="ESLint" />
              <Technology name="Prettier" />
            </TechnologyCategory>
            <TechnologyCategory name="Collaboration">
              <Technology name="Discord" />
            </TechnologyCategory>
          </TechnologyList>
        </TechnologyListCollapsible>
      </TimelineEntry>
      <TimelineEntry
        from={2021}
        position="Member"
        title="SKNI Kod"
        url="https://kod.prz.edu.pl/"
      >
        <p>
          I am an active member contributing to group&apos;s open-source web
          projects and a mentor of younger colleagues.
        </p>
        <TechnologyListCollapsible>
          <TechnologyList>
            <TechnologyCategory name="Languages">
              <Technology name="HTML" />
              <Technology name="CSS" />
              <Technology name="Sass">SCSS</Technology>
              <Technology name="JavaScript" />
              <Technology name="Markdown" />
              <Technology name="TypeScript" />
              <Technology name="SQL" />
            </TechnologyCategory>
            <TechnologyCategory name="Runtimes">
              <Technology name="Node.js" />
            </TechnologyCategory>
            <TechnologyCategory name="Frameworks">
              <Technology name="React" />
              <Technology name="Next.js">App & Pages Router</Technology>
              <Technology name="Vue.js" />
            </TechnologyCategory>
            <TechnologyCategory name="Styling">
              <Technology name="Tailwind CSS" />
              <Technology name="cva" />
            </TechnologyCategory>
            <TechnologyCategory name="UI libraries">
              <Technology name="Headless UI" />
              <Technology name="Radix UI" />
            </TechnologyCategory>
            <TechnologyCategory name="State management">
              <Technology name="Zustand" />
              <Technology name="React Hook Form" />
              <Technology name="TanStack Query">React Query</Technology>
            </TechnologyCategory>
            <TechnologyCategory name="Libraries">
              <Technology name="Three.js" />
              <Technology name="React Three Fiber" />
              <Technology name="date-fns" />
              <Technology name="Axios" />
              <Technology name="Zod" />
              <Technology name="tRPC" />
              <Technology name="Auth.js">NextAuth.js</Technology>
              <Technology name="Drizzle ORM" />
              <Technology name="Prisma" />
            </TechnologyCategory>
            <TechnologyCategory name="Databases">
              <Technology name="MySQL" />
              <Technology name="PostgreSQL" />
              <Technology name="PlanetScale" />
              <Technology name="Neon" />
            </TechnologyCategory>
            <TechnologyCategory name="Version control">
              <Technology name="Git" />
              <Technology name="GitHub" />
              <Technology name="GitLab" />
            </TechnologyCategory>
            <TechnologyCategory name="CI/CD">
              <Technology name="Vercel" />
            </TechnologyCategory>
            <TechnologyCategory name="Tools">
              <Technology name="Docker" />
              <Technology name="ESLint" />
              <Technology name="Prettier" />
            </TechnologyCategory>
            <TechnologyCategory name="Collaboration">
              <Technology name="Discord" />
              <Technology name="GitHub Projects" />
            </TechnologyCategory>
          </TechnologyList>
        </TechnologyListCollapsible>
      </TimelineEntry>
    </Timeline>
  );
};
