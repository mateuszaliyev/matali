import { Link } from "@/components/link";
import {
  Technology,
  TechnologyCategory,
  TechnologyList,
  TechnologyListCollapsible,
} from "@/components/technology";
import { Timeline, TimelineEntry } from "@/components/timeline";

export const Experience = () => (
  <Timeline>
    <h2>Experience</h2>
    <TimelineEntry
      from={2024}
      position="Frontend Developer"
      title="Web Leaders"
      url="https://webleaders.pl/"
    >
      <p>
        I took over the frontend development of{" "}
        <Link href="https://takelink.pl/" target="_blank">
          TakeLink
        </Link>
        , a platform offering sponsored articles for agencies, right after its
        inception and successfully delivered it to completion. I am currently
        working on a new website for anime and manga fans.
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
            <Technology name="Next.js">App Router</Technology>
            <Technology name="Hono" />
          </TechnologyCategory>
          <TechnologyCategory name="Styling">
            <Technology name="Tailwind CSS" />
            <Technology name="cva" />
          </TechnologyCategory>
          <TechnologyCategory name="UI libraries">
            <Technology name="Radix UI" />
            <Technology name="React Aria Components" />
          </TechnologyCategory>
          <TechnologyCategory name="State management">
            <Technology name="React Hook Form" />
            <Technology name="Zustand" />
          </TechnologyCategory>
          <TechnologyCategory name="Libraries">
            <Technology name="Auth.js">NextAuth.js</Technology>
            <Technology name="CKEditor" />
            <Technology name="Drizzle ORM" />
            <Technology name="Paraglide" />
            <Technology name="Zod" />
          </TechnologyCategory>
          <TechnologyCategory name="Databases">
            <Technology name="MySQL" />
            <Technology name="Redis" />
            <Technology name="SQLite" />
          </TechnologyCategory>
          <TechnologyCategory name="Version control">
            <Technology name="Git" />
            <Technology name="GitHub" />
          </TechnologyCategory>
          <TechnologyCategory name="Testing">
            <Technology name="Playwright" />
          </TechnologyCategory>
          <TechnologyCategory name="Tools">
            <Technology name="Docker" />
            <Technology name="ESLint" />
            <Technology name="Prettier" />
          </TechnologyCategory>
          <TechnologyCategory name="Collaboration">
            <Technology name="Confluence" />
            <Technology name="Figma" />
            <Technology name="Telegram" />
            <Technology name="Trello" />
          </TechnologyCategory>
        </TechnologyList>
      </TechnologyListCollapsible>
    </TimelineEntry>
    <TimelineEntry
      from={2023}
      position="Fullstack Developer"
      title="Wenanty Group"
      to={2023}
    >
      <ul>
        <li>
          I was responsible for design, architectural decisions and development
          of a web application for a company from an automotive industry,
          streamlining their quality control process.
        </li>
        <li>
          I had an opportunity to join an awesome international team building an
          event ticketing app called{" "}
          <Link href="https://pay2stay.com/" target="_blank">
            Pay2Stay
          </Link>
          , where I worked on improving user&apos;s onboarding experience and
          application&apos;s performance.
        </li>
        <li>
          I also built a conceptual web application for the Swiss real estate
          market.
        </li>
      </ul>
      <TechnologyListCollapsible>
        <TechnologyList>
          <TechnologyCategory name="Languages">
            <Technology name="HTML" />
            <Technology name="CSS" />
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
            <Technology name="Next.js">App Router</Technology>
          </TechnologyCategory>
          <TechnologyCategory name="Styling">
            <Technology name="Tailwind CSS" />
            <Technology name="cva" />
          </TechnologyCategory>
          <TechnologyCategory name="UI libraries">
            <Technology name="Radix UI" />
          </TechnologyCategory>
          <TechnologyCategory name="State management">
            <Technology name="Zustand" />
            <Technology name="React Hook Form" />
            <Technology name="TanStack Query">React Query</Technology>
          </TechnologyCategory>
          <TechnologyCategory name="Libraries">
            <Technology name="TipTap" />
            <Technology name="tRPC" />
            <Technology name="Auth.js">NextAuth.js</Technology>
            <Technology name="Prisma" />
          </TechnologyCategory>
          <TechnologyCategory name="Databases">
            <Technology name="MySQL" />
            <Technology name="PlanetScale" />
            <Technology name="SQL Server" />
          </TechnologyCategory>
          <TechnologyCategory name="Version control">
            <Technology name="Git" />
            <Technology name="GitHub" />
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
            <Technology name="Asana" />
            <Technology name="ClickUp" />
            <Technology name="Clockify" />
            <Technology name="Discord" />
            <Technology name="Google Workspace" />
          </TechnologyCategory>
        </TechnologyList>
      </TechnologyListCollapsible>
    </TimelineEntry>
    <TimelineEntry
      from={2021}
      position="Junior Web Developer"
      title="Ideo"
      to={2022}
      url="https://ideo.pl/"
    >
      <p>
        I developed and maintained an e-commerce website of one of the biggest
        retailers in Poland. I was involved in working on train operator&apos;s
        website as well as other company’s internal projects.
      </p>
      <TechnologyListCollapsible>
        <TechnologyList>
          <TechnologyCategory name="Languages">
            <Technology name="HTML" />
            <Technology name="CSS" />
            <Technology name="Sass">SCSS</Technology>
            <Technology name="JavaScript" />
            <Technology name="TypeScript" />
          </TechnologyCategory>
          <TechnologyCategory name="Runtimes">
            <Technology name="Node.js" />
          </TechnologyCategory>
          <TechnologyCategory name="Frameworks">
            <Technology name="Vue.js" />
          </TechnologyCategory>
          <TechnologyCategory name="CMS">
            <Technology name="Edito CMS" />
          </TechnologyCategory>
          <TechnologyCategory name="Databases">
            <Technology name="MySQL" />
            <Technology name="PostgreSQL" />
          </TechnologyCategory>
          <TechnologyCategory name="Version control">
            <Technology name="Git" />
            <Technology name="GitLab" />
          </TechnologyCategory>
          <TechnologyCategory name="Tools">
            <Technology name="Docker" />
            <Technology name="Prettier" />
          </TechnologyCategory>
          <TechnologyCategory name="Collaboration">
            <Technology name="Figma" />
            <Technology name="LOGITO" />
            <Technology name="Microsoft Teams" />
            <Technology name="Redmine" />
          </TechnologyCategory>
        </TechnologyList>
      </TechnologyListCollapsible>
    </TimelineEntry>
    <TimelineEntry from={2021} title="Freelancing" to={2025}>
      <p>
        I built a new website of{" "}
        <Link href="https://fabryka-kreatywnosci.pl/" target="_blank">
          Fabryka Kreatywności
        </Link>{" "}
        – an event agency for children. The company has opened many new branches
        since. I am actively working on new features and maintaining the website
      </p>
      <TechnologyListCollapsible>
        <TechnologyList>
          <TechnologyCategory name="Languages">
            <Technology name="HTML" />
            <Technology name="CSS" />
            <Technology name="JavaScript" />
            <Technology name="Markdown" />
            <Technology name="TypeScript" />
          </TechnologyCategory>
          <TechnologyCategory name="Runtimes">
            <Technology name="Node.js" />
          </TechnologyCategory>
          <TechnologyCategory name="Frameworks">
            <Technology name="React" />
            <Technology name="Next.js">Pages & App Router</Technology>
          </TechnologyCategory>
          <TechnologyCategory name="Styling">
            <Technology name="Tailwind CSS" />
            <Technology name="cva" />
            <Technology name="Stitches" />
          </TechnologyCategory>
          <TechnologyCategory name="UI libraries">
            <Technology name="Radix UI" />
            <Technology name="Headless UI" />
          </TechnologyCategory>
          <TechnologyCategory name="State management">
            <Technology name="React Hook Form" />
          </TechnologyCategory>
          <TechnologyCategory name="Libraries">
            <Technology name="Zod" />
            <Technology name="Nodemailer" />
          </TechnologyCategory>
          <TechnologyCategory name="CMS">
            <Technology name="Contentful" />
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
            <Technology name="Figma" />
          </TechnologyCategory>
        </TechnologyList>
      </TechnologyListCollapsible>
    </TimelineEntry>
    <TimelineEntry
      from={2018}
      position="Trainee"
      title="CINEL"
      to={2018}
      url="https://cinel.pt/"
    >
      <p>
        I was a trainee designing and implementing websites during internship
        abroad at the CINEL training centre in Lisbon, Portugal as part of the{" "}
        <Link href="https://power.gov.pl/" target="_blank">
          PO WER
        </Link>{" "}
        operational programme.
      </p>
      <TechnologyListCollapsible text="Technologies">
        <TechnologyList>
          <TechnologyCategory name="Languages">
            <Technology name="HTML" />
            <Technology name="CSS" />
            <Technology name="JavaScript" />
          </TechnologyCategory>
        </TechnologyList>
      </TechnologyListCollapsible>
    </TimelineEntry>
  </Timeline>
);
