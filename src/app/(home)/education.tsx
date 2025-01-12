import {
  Technology,
  TechnologyCategory,
  TechnologyList,
  TechnologyListCollapsible,
} from "@/components/technology";
import { Timeline, TimelineEntry } from "@/components/timeline";

export const Education = () => (
  <Timeline>
    <h2>Education</h2>
    <TimelineEntry
      from={2019}
      title="Rzeszów University of Technology"
      to={2023}
      url="https://prz.edu.pl/"
    >
      <p>
        Bachelor of Engineering in Computer Engineering, speciality Information
        Technology in Business
      </p>
      <TechnologyListCollapsible text="Technologies">
        <TechnologyList>
          <TechnologyCategory name="Languages">
            <Technology name="HTML" />
            <Technology name="CSS" />
            <Technology name="Sass">SCSS</Technology>
            <Technology name="JavaScript" />
            <Technology name="SQL" />
          </TechnologyCategory>
          <TechnologyCategory name="Runtimes">
            <Technology name="Node.js" />
          </TechnologyCategory>
          <TechnologyCategory name="Frameworks">
            <Technology name="React" />
            <Technology name="Next.js">Pages Router</Technology>
            <Technology name="Express" />
          </TechnologyCategory>
          <TechnologyCategory name="UI libraries">
            <Technology name="Material UI" />
          </TechnologyCategory>
          <TechnologyCategory name="Libraries">
            <Technology name="date-fns" />
            <Technology name="i18next" />
            <Technology name="Lodash" />
          </TechnologyCategory>
          <TechnologyCategory name="Databases">
            <Technology name="PostgreSQL" />
          </TechnologyCategory>
          <TechnologyCategory name="Version control">
            <Technology name="Git" />
            <Technology name="GitHub" />
          </TechnologyCategory>
          <TechnologyCategory name="CI/CD">
            <Technology name="Vercel" />
            <Technology name="Heroku" />
          </TechnologyCategory>
          <TechnologyCategory name="Testing">
            <Technology name="Jest" />
          </TechnologyCategory>
          <TechnologyCategory name="Tools">
            <Technology name="Prettier" />
          </TechnologyCategory>
          <TechnologyCategory name="Collaboration">
            <Technology name="Microsoft Teams" />
            <Technology name="Trello" />
          </TechnologyCategory>
        </TechnologyList>
      </TechnologyListCollapsible>
    </TimelineEntry>
  </Timeline>
);
