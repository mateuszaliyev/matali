import { ChevronDiagonalIcon } from "@/components/icons/chevron";
import { Link } from "@/components/link";

import { environment } from "@/environment.mjs";

import { container, link, prose } from "@/utilities/classname";

const HomePage = () => (
  <main className="my-32">
    <section>
      <div className={container()}>
        <h1 className="bg-gradient-to-b from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-3xl leading-none text-transparent">
          Mateusz Aliyev
        </h1>
        <p className="text-lg text-gray-400">Frontend Developer</p>
        <p className="mt-8 text-balance text-xl">
          I&apos;m a frontend developer from Rzeszów, Poland, on a mission to
          build applications users love.
        </p>
        <ul className="mt-8 flex items-center gap-4">
          <li>
            <Link
              className={link()}
              href={`mailto:${environment.NEXT_PUBLIC_EMAIL_ADDRESS}`}
              target="_blank"
            >
              Email
              <ChevronDiagonalIcon link />
            </Link>
          </li>
          <li>
            <Link className={link()} href="/github" target="_blank">
              GitHub
              <ChevronDiagonalIcon link />
            </Link>
          </li>
          <li>
            <Link className={link()} href="/linkedin" target="_blank">
              LinkedIn
              <ChevronDiagonalIcon link />
            </Link>
          </li>
        </ul>
      </div>
    </section>
    <section className="mt-32">
      <div
        className={container({
          className: prose({ className: "prose-h3:mb-0" }),
        })}
      >
        <h2>My timeline</h2>
        <h3>Freelancing</h3>
        <span className="text-sm text-gray-500">2021–present</span>
        <p>
          I built a new website of{" "}
          <Link href="https://fabryka-kreatywnosci.pl/" target="_blank">
            Fabryka Kreatywności
          </Link>{" "}
          – an event agency for children. I am currently actively working on new
          features and maintaining the website.
        </p>
        <hr />
        <h3>Wenanty Group</h3>
        <span className="text-sm text-gray-500">Fullstack Developer, 2023</span>
        <ul>
          <li>
            I was responsible for design, architectural decisions and
            development of a web application for a company from an automotive
            industry, streamlining their quality control process.
          </li>
          <li>
            I had an opportunity to join an awesome international team building
            an event ticketing app called{" "}
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
        <p>Unfortunately the founders decided to dissolve Wenanty Group.</p>
        <hr />
        <h3>
          <Link href="https://spaceappschallenge.org/" target="_blank">
            NASA Space Apps Challenge
          </Link>
        </h3>
        <span className="text-sm text-gray-500">Team 500 ISS, 2022</span>
        <p>
          I led the team that in 28 hours managed to build a 3D satellite
          tracking web application called{" "}
          <Link href="https://spacetag.mata.li/" target="_blank">
            SpaceTag
          </Link>
          , which was awarded by{" "}
          <Link href="https://ses.com/" target="_blank">
            SES
          </Link>{" "}
          – one of the world&apos;s leading satellite owners and operators.
        </p>
        <hr />
        <h3>
          <Link href="https://kod.prz.edu.pl/" target="_blank">
            SKNI Kod
          </Link>
        </h3>
        <span className="text-sm text-gray-500">Member, 2021–present</span>
        <p>
          I am an active member contributing to group&apos;s open-source web
          projects and a mentor of younger colleagues.
        </p>
        <hr />
        <h3>
          <Link href="https://ideo.pl/" target="_blank">
            Ideo
          </Link>
        </h3>
        <span className="text-sm text-gray-500">
          Junior Web Developer, 2021–2022
        </span>
        <p>
          I developed and maintained an e-commerce website of one of the biggest
          retailers in Poland. I was involved in working on train
          operator&apos;s website as well as other company’s internal projects.
        </p>
        <hr />
        <h3>
          <Link href="https://prz.edu.pl/" target="_blank">
            Rzeszów University of Technology
          </Link>
        </h3>
        <span className="text-sm text-gray-500">2019–2023</span>
        <p>
          Bachelor of Engineering in Computer Engineering, speciality
          Information Technology in Business
        </p>
        <hr />
        <h3>
          <Link href="https://cinel.pt/" target="_blank">
            CINEL
          </Link>
        </h3>
        <span className="text-sm text-gray-500">Trainee, 2018</span>
        <p>
          I was a trainee designing and implementing websites during internship
          abroad at the CINEL training centre in Lisbon, Portugal as part of the{" "}
          <Link href="https://power.gov.pl/" target="_blank">
            PO WER
          </Link>{" "}
          operational programme.
        </p>
      </div>
    </section>
  </main>
);

export default HomePage;
