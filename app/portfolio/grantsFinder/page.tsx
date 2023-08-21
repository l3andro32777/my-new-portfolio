"use client"

import Image from "next/image"
import Link from "next/link"
import { Code, MonitorSmartphone, User } from "lucide-react"
import { useTheme } from "next-themes"

import {
  arrowBlack,
  arrowWhite,
  grantsFinderAfter1,
  grantsFinderAfter2,
  grantsFinderBefore,
  grantsFinderBird1,
  grantsFinderBird2,
  grantsFinderBird3,
  grantsFinderBox1,
  grantsFinderBox2,
  grantsFinderBox3,
  grantsFinderColors,
  grantsFinderConcept1,
  grantsFinderConcept2,
  grantsFinderConcept3,
  grantsFinderFirstVersion,
  grantsFinderLogo,
  grantsFinderLow1,
  grantsFinderLow2,
  grantsFinderLow3,
  grantsFinderLow5,
  grantsFinderLow6,
  grantsFinderLowM1,
  grantsFinderLowM2,
  grantsFinderPreview,
  grantsFinderShape,
} from "@/lib/info"
import { Badge } from "@/components/ui/badge"

const project = {
  title: "GrantsFinder",
  href: "/portfolio/grantsFinder",
  description:
    "A platform, which provides an AI chatbot that will help you find the best European grants available for your project or idea.",
  date: "2023",
  category: "Internship",
  company: "Build Up Labs",
  image: grantsFinderPreview,
  public: "Entities with a project idea, in search of European funds",
  language: "Next.js, shadcn/ui and Tailwind",
  platform: "Desktop and Mobile",
  logo: grantsFinderLogo,
  typography: "Inter.",
}

export default function GrantsFinder() {
  const { theme } = useTheme()
  const arrow = theme === "dark" ? arrowWhite : arrowBlack

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col pb-2 md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl times">
            {project.title}
          </h1>
          <div className="flex items-center py-4 gap-x-4 text-sm">
            <span className="font-bold">{project.date}</span>
            <Badge className="">{project.category}</Badge>
            <Badge variant={"outlineReverse"} className="">
              {project.company}
            </Badge>
          </div>
          <p className="text-muted-foreground">{project.description}</p>
          <div className="my-4 flex flex-col py-4 gap-4 font-semibold rounded-md">
            <div className="flex items-center gap-4">
              <Badge className="p-2">
                <User />
              </Badge>
              {project.public}
            </div>
            <div className="flex items-center gap-4">
              <Badge className="p-2">
                <Code />
              </Badge>
              {project.language}
            </div>
            <div className="flex items-center gap-4">
              <Badge className="p-2">
                <MonitorSmartphone />
              </Badge>
              {project.platform}
            </div>
          </div>
        </div>
        <Image src={project.image} alt="" className="w-[40rem] rounded-md" />
      </div>
      <hr />

      <div className="py-4">
        <h2 className="text-2xl font-bold leading-tight tracking-tighter py-2 md:text-4xl times">
          Branding
        </h2>
        <p className="text-muted-foreground">
          Explore the essence of {project.title}&apos;s branding, where
          creativity merges seamlessly with purpose, crafting a distinctive
          identity.
        </p>
        <div className="pb-4">
          <h3 className="text-xl font-bold leading-tight tracking-tighter py-4 md:text-3xl times">
            Logo
          </h3>
          <div className="flex items-center justify-center w-[12rem] h-[12rem] bg-[#F8FAFC] p-4 rounded-3xl shadow-md">
            <Image src={project.logo} alt="" className="w-[8rem]" />
          </div>
          <p className="pt-4">
            The logo is a fusion of the letter{" "}
            <span className="font-semibold">&quot;G&quot;</span> from
            &quot;Grants&quot; and a{" "}
            <span className="font-semibold">magnifying glass</span>, symbolizing
            &quot;Finder&quot;, embodying the project&apos;s essence of
            discovery and opportunity.
          </p>
        </div>
        <div className="pb-4">
          <h3 className="text-xl font-bold leading-tight tracking-tighter pt-4 pb-2 md:text-3xl times">
            Colors
          </h3>
          <div className="block md:flex">
            <div className="flex">
              <div className="w-12 h-12 bg-[#020D1B]"></div>
              <div className="w-12 h-12 bg-[#0F1729]"></div>
              <div className="w-12 h-12 bg-[#0A85ED]"></div>
              <div className="w-12 h-12 bg-[#1E293B]"></div>
              <div className="w-12 h-12 bg-[#374357]"></div>
            </div>
            <div className="flex">
              <div className="w-12 h-12 bg-[#5D6C7E]"></div>
              <div className="w-12 h-12 bg-[#E1E7EF]"></div>
              <div className="w-12 h-12 bg-[#F1F5F9]"></div>
              <div className="w-12 h-12 bg-[#F8FAFC]"></div>
              <div className="w-12 h-12 bg-[#D81E5B]"></div>
            </div>
          </div>
          <p className="pt-4">
            The chosen color palette reflects a sense of{" "}
            <span className="font-semibold">sophistication and modernity</span>.
          </p>
          <p>
            From deep blues to versatile grays, each hue has been selected to
            evoke{" "}
            <span className="font-semibold">
              emotions of trust, clarity and maturity
            </span>
            .
          </p>
        </div>
        <div className="pb-4">
          <h3 className="text-xl font-bold leading-tight tracking-tighter py-4 md:text-3xl times">
            Typography
          </h3>
          <p>
            The modern{" "}
            <span className="font-semibold">{project.typography}</span> font was
            chosen for {project.title}, adding a touch of contemporary elegance
            to the brand&apos;s identity.
          </p>
        </div>
      </div>
      <hr />
      <div className="py-4">
        <h2 className="text-2xl font-bold leading-tight tracking-tighter py-2 md:text-4xl times">
          Concept
        </h2>
        <p className="text-muted-foreground">
          Delve into the conceptual realm of {project.title}, where innovative
          ideas converge to shape a unique and visionary identity.
        </p>
        <div className="py-4">
          <div className="grid gap-y-2 pb-4">
            <p>
              The idea would be to use artificial intelligence in the search for
              opportunities to obtain European funds for projects or project
              ideas.
            </p>
            <p>
              For this purpose, a prompt should be provided, gathering relevant
              information about a project, based on example questions.
            </p>
            <p>
              After it&apos;s submitted, cards would be generated with
              information about opportunities, extracted from websites currently
              used for this purpose, which would provide a good match with the
              description.
            </p>
          </div>
          <div className="flex flex-col justify-center md:flex-row gap-4">
            <Image
              src={arrow}
              alt=""
              className="w-[8rem] h-[8rem] rotate-90 mx-auto md:w-[16rem] md:h-[16rem] md:rotate-12 md:ml-44 "
            />
            <Image
              src={grantsFinderFirstVersion}
              alt=""
              className="w-[40rem]"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="pt-4 pb-8">
        <h2 className="text-2xl font-bold leading-tight tracking-tighter py-2 md:text-4xl times">
          Unleashing UX Magic
        </h2>
        <div className="grid gap-y-4 pb-6">
          <p className="text-muted-foreground">
            Dive deep into the heart of the project ideation.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-[24rem]">
            <h4 className="text-lg font-semibold">Concept #1: Dynamic Form</h4>
            <p className="text-muted-foreground pb-2">
              Unveiling possibilities.
            </p>
            <Image
              src={grantsFinderConcept1}
              alt=""
              className="md:w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-[24rem]">
            <h4 className="text-lg font-semibold">Concept #2: Chat Bot</h4>
            <p className="text-muted-foreground pb-2">
              Conversations that empower.
            </p>
            <Image
              src={grantsFinderConcept2}
              alt=""
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="pt-6">
          <h4 className="text-lg font-semibold">A Symphony of Ideas</h4>
          <p className="text-muted-foreground pb-2">
            Witness the fusion of brilliance. These distinct concepts harmonize
            into a revolutionary solution, bringing the power of intelligent
            interaction to life.
          </p>
          <Image
            src={grantsFinderConcept3}
            alt=""
            className="md:w-1/2 rounded-lg shadow-lg"
          />
        </div>
      </div>
      <hr />
      <div className="pt-4 pb-8">
        <h2 className="text-2xl font-bold leading-tight tracking-tighter py-2 md:text-4xl times">
          Shapping possibilities
        </h2>
        <div className="grid gap-y-4">
          <p className="text-muted-foreground">
            Here, the canvas of creativity transforms into tangible structures.
          </p>
        </div>
        <div className="py-6">
          <h4 className="text-lg font-semibold">Main shape</h4>
          <p className="text-muted-foreground pb-2">Beyond conversations.</p>
          <Image
            src={grantsFinderShape}
            alt=""
            className="md:w-1/2 rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col gap-8 mb-4">
          <div>
            <h4 className="text-lg font-semibold">Other #1: A Smart Bird</h4>
            <p className="text-muted-foreground pb-2">
              The bird would talk to us and, in the end, would land on top of
              the best opportunity.
            </p>
            <div className="md:flex gap-4">
              <Image
                src={grantsFinderBird1}
                alt=""
                className="md:w-[24rem] rounded-lg shadow-lg mb-2 md:mb-0"
              />
              <Image
                src={grantsFinderBird3}
                alt=""
                className="md:w-[24rem] rounded-lg shadow-lg mb-2 md:mb-0"
              />
              <Image
                src={grantsFinderBird2}
                alt=""
                className="md:w-[24rem] rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <h4 className="text-lg font-semibold">Other #2: A Box</h4>
            <p className="text-muted-foreground pb-2">
              The answers would be put inside inside a box and, in the end, the
              best opportunities would come out of it.
            </p>
          </div>
          <div className="md:flex gap-4">
            <Image
              src={grantsFinderBox3}
              alt=""
              className="md:w-[24rem] rounded-lg shadow-lg mb-2 md:mb-0"
            />
            <Image
              src={grantsFinderBox1}
              alt=""
              className="md:w-[24rem] rounded-lg shadow-lg mb-2 md:mb-0"
            />
            <Image
              src={grantsFinderBox2}
              alt=""
              className="md:w-[24rem] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="pt-4 pb-8">
        <h2 className="text-2xl font-bold leading-tight tracking-tighter py-2 md:text-4xl times">
          Low-Fidelity prototypes
        </h2>
        <div className="grid gap-y-4">
          <p className="text-muted-foreground">Sketching ideas.</p>
        </div>
        <div className="flex flex-col gap-8 pt-6 mb-4">
          <div>
            <h4 className="text-lg font-semibold">Homepage</h4>
            <p className="text-muted-foreground pb-2">
              A card for each search chat and a button that allows starting
              anew.
            </p>
            <div className="md:flex gap-4">
              <Image
                src={grantsFinderLowM1}
                alt=""
                className="md:w-[24rem] rounded-lg shadow-lg mb-2 md:mb-0"
              />
              <Image
                src={grantsFinderLowM2}
                alt=""
                className="md:w-[24rem] rounded-lg shadow-lg mb-2 md:mb-0"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <h4 className="text-lg font-semibold">Chat page</h4>
            <p className="text-muted-foreground pb-2">
              A main section for chatting with the chat bot and a right-side
              menu displaying found opportunities.
            </p>
          </div>
          <div className="md:flex gap-4">
            <Image
              src={grantsFinderLow1}
              alt=""
              className="md:w-[24rem] rounded-lg shadow-lg mb-2"
            />
            <Image
              src={grantsFinderLow2}
              alt=""
              className="md:w-[24rem] rounded-lg shadow-lg mb-2"
            />
            <Image
              src={grantsFinderLow3}
              alt=""
              className="md:w-[24rem] rounded-lg shadow-lg mb-2"
            />
          </div>
          <div className="md:flex gap-4">
            <Image
              src={grantsFinderShape}
              alt=""
              className="md:w-[24rem] rounded-lg shadow-lg mb-2 md:mb-0"
            />
            <Image
              src={grantsFinderLow5}
              alt=""
              className="md:w-[24rem] rounded-lg shadow-lg mb-2 md:mb-0"
            />
            <Image
              src={grantsFinderLow6}
              alt=""
              className="md:w-[24rem] rounded-lg shadow-lg mb-2 md:mb-0"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="pt-4 pb-8">
        <h2 className="text-2xl font-bold leading-tight tracking-tighter py-2 md:text-4xl times">
          First steps
        </h2>
        <div className="grid gap-y-4">
          <p className="text-muted-foreground">
            Take a look at the initial stages of the project.
          </p>
        </div>
        <div className="flex flex-col gap-8 pt-6 mb-4">
          <div>
            <h4 className="text-lg font-semibold">Before</h4>
            <p className="text-muted-foreground pb-2">
              Witness the early stages of the project, where ideas were just
              beginning to take shape.
            </p>
            <div className="md:flex gap-4">
              <Image
                src={grantsFinderBefore}
                alt=""
                className="md:w-[36rem] shadow-lg mb-2 md:mb-0"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <h4 className="text-lg font-semibold">After</h4>
            <p className="text-muted-foreground pb-2">
              Marvel at the evolution of raw concepts into polished designs,
              where styles breathe life into functionality.
            </p>
          </div>
          <div className="md:flex gap-4">
            <Image
              src={grantsFinderAfter1}
              alt=""
              className="md:w-[36rem] shadow-lg mb-2"
            />
            <Image
              src={grantsFinderAfter2}
              alt=""
              className="md:w-[36rem] shadow-lg mb-2"
            />
          </div>
        </div>
      </div>
      {/* <hr /> */}
      {/* <div className="pt-4 pb-8">
        <h2 className="text-2xl font-bold leading-tight tracking-tighter py-2 md:text-4xl times">
          High-Fidelity prototypes
        </h2>
        <div className="grid gap-y-4">
          <p className="text-muted-foreground">
            Explore detailed and refined prototypes that capture the essence of
            the envisioned user experience.
          </p>
        </div>
        <div className="flex flex-col gap-8 pt-6 mb-4">
          <div>
            <h4 className="text-lg font-semibold">Homepage</h4>
            <p className="text-muted-foreground pb-2">
              A card for each search chat and a button that allows starting
              anew.
            </p>
            <div className="md:flex gap-4">
              <Image
                src={grantsFinderLowM1}
                alt=""
                className="md:w-[24rem] rounded-lg shadow-lg mb-2 md:mb-0"
              />
              <Image
                src={grantsFinderLowM2}
                alt=""
                className="md:w-[24rem] rounded-lg shadow-lg mb-2 md:mb-0"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <h4 className="text-lg font-semibold">Chat page</h4>
            <p className="text-muted-foreground pb-2">
              A main section for chatting with the chat bot and a right-side
              menu displaying found opportunities.
            </p>
          </div>
          <div className="md:flex gap-4">
            <Image
              src={grantsFinderLow1}
              alt=""
              className="md:w-[24rem] rounded-lg shadow-lg mb-2"
            />
            <Image
              src={grantsFinderLow2}
              alt=""
              className="md:w-[24rem] rounded-lg shadow-lg mb-2"
            />
            <Image
              src={grantsFinderLow3}
              alt=""
              className="md:w-[24rem] rounded-lg shadow-lg mb-2"
            />
          </div>
          <div className="md:flex gap-4">
            <Image
              src={grantsFinderShape}
              alt=""
              className="md:w-[24rem] rounded-lg shadow-lg mb-2 md:mb-0"
            />
            <Image
              src={grantsFinderLow5}
              alt=""
              className="md:w-[24rem] rounded-lg shadow-lg mb-2 md:mb-0"
            />
            <Image
              src={grantsFinderLow6}
              alt=""
              className="md:w-[24rem] rounded-lg shadow-lg mb-2 md:mb-0"
            />
          </div>
        </div>
      </div> */}
    </section>
  )
}
