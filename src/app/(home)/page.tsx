import { container, prose } from "@/utilities/classname";

import { Activities } from "./activities";
import { Education } from "./education";
import { Experience } from "./experience";
import { HomePageHeader } from "./header";
import { TechnicalSkills } from "./technical-skills";

const HomePage = () => (
  <>
    <HomePageHeader className="my-32" />
    <main className="my-32 flex flex-col gap-32">
      <Experience />
      <Education />
      <Activities />
      <TechnicalSkills />
      <section>
        <div
          className={container({
            className: prose(),
          })}
        >
          <blockquote className="text-balance">
            <strong>Disclaimer</strong>: This website is <u>intentionally</u>{" "}
            blocked from indexing.
          </blockquote>
        </div>
      </section>
    </main>
  </>
);

export default HomePage;
