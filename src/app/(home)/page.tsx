import { HomePageHeader } from "./header";
import { HomePageTechnicalSkills } from "./technical-skills";
import { HomePageTimeline } from "./timeline";

const HomePage = () => (
  <>
    <HomePageHeader className="mt-32" />
    <main className="my-32 flex flex-col gap-32">
      <HomePageTimeline />
      <HomePageTechnicalSkills />
    </main>
  </>
);

export default HomePage;
