import {
  Technology,
  TechnologyCategory,
  TechnologyList,
} from "@/components/technology";

import { container, prose } from "@/utilities/classname";

export const HomePageTechnicalSkills = () => (
  <section>
    <div
      className={container({
        className: prose(),
      })}
    >
      <h2>My technical skills</h2>
      <TechnologyList className="prose-sm md:prose-base">
        <TechnologyCategory name="Languages">
          <Technology name="HTML" />
          <Technology name="CSS" />
          <Technology name="Sass">SCSS</Technology>
          <Technology name="JavaScript" />
          <Technology name="Markdown" />
          <Technology name="TypeScript" />
          <Technology name="SQL" />
          <Technology name="GraphQL" />
        </TechnologyCategory>
        <TechnologyCategory name="Runtimes">
          <Technology name="Node.js" />
          <Technology name="Deno" />
        </TechnologyCategory>
        <TechnologyCategory name="Frameworks">
          <Technology name="React" />
          <Technology name="Next.js" />
          <Technology name="Astro" />
          <Technology name="SolidJS" />
          <Technology name="Vue.js" />
          <Technology name="Express" />
        </TechnologyCategory>
        <TechnologyCategory name="Styling">
          <Technology name="Tailwind CSS" />
          <Technology name="cva" />
          <Technology name="Stitches" />
          <Technology name="StyleX" />
          <Technology name="styled-components" />
          <Technology name="vanilla-extract" />
        </TechnologyCategory>
        <TechnologyCategory name="UI libraries">
          <Technology name="Radix UI" />
          <Technology name="Headless UI" />
          <Technology name="Material UI" />
        </TechnologyCategory>
        <TechnologyCategory name="State management">
          <Technology name="Zustand" />
          <Technology name="Redux">Redux Toolkit</Technology>
          <Technology name="React Hook Form" />
          <Technology name="TanStack Query">React Query</Technology>
        </TechnologyCategory>
        <TechnologyCategory name="Libraries">
          <Technology name="date-fns" />
          <Technology name="i18next" />
          <Technology name="Lodash" />
          <Technology name="Zod" />
          <Technology name="tRPC" />
          <Technology name="Auth.js">NextAuth.js</Technology>
          <Technology name="Nodemailer" />
          <Technology name="Drizzle ORM" />
          <Technology name="Prisma" />
        </TechnologyCategory>
        <TechnologyCategory name="CMS">
          <Technology name="Contentful" />
        </TechnologyCategory>
        <TechnologyCategory name="Databases">
          <Technology name="MySQL" />
          <Technology name="PostgreSQL" />
          <Technology name="SQLite" />
          <Technology name="SQL Server" />
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
        <TechnologyCategory name="Testing">
          <Technology name="Vitest" />
          <Technology name="Playwright" />
          <Technology name="React Testing Library" />
          <Technology name="Jest" />
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
          <Technology name="Figma" />
          <Technology name="GitHub Projects" />
          <Technology name="Google Workspace" />
          <Technology name="Microsoft Teams" />
          <Technology name="Redmine" />
          <Technology name="Trello" />
        </TechnologyCategory>
      </TechnologyList>
    </div>
  </section>
);
