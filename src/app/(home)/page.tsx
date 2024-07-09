import { container, prose } from "@/utilities/classname";

import { HomePageHeader } from "./header";
import { HomePageTechnicalSkills } from "./technical-skills";
import { HomePageTimeline } from "./timeline";

const HomePage = () => (
  <>
    <HomePageHeader className="my-32" />
    <main className="my-32 flex flex-col gap-32">
      <HomePageTimeline />
      <HomePageTechnicalSkills />
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
