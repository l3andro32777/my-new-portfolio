import { Metadata } from "next"
import Image from "next/image"
import { Code, ExternalLink, MonitorSmartphone, User } from "lucide-react"

import {
  playerContacts,
  playerFacebook,
  playerFooter,
  playerForum,
  playerHero,
  playerLogo,
  playerPreview,
  playerSpotify,
  playerTestimonials,
  playerWhy,
} from "@/lib/info"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Player",
  description:
    "A social media made for gamers. It's a new way to allow gamers to share their taste for videogames.",
}

const project = {
  title: "Player",
  href: "/portfolio/player",
  description:
    "A social media made for gamers. It's a new way to allow gamers to share their taste for videogames.",
  date: "2021",
  category: "Bachelor",
  company: "IPS",
  image: playerPreview,
  public: "Gamers",
  language: "Node.js",
  platform: "Desktop",
  logo: playerLogo,
  typography: "OpenSans",
}

export default function Player() {
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
        <Image
          src={project.image}
          alt="Preview"
          className="w-[40rem] rounded-md"
        />
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
          <div className="flex items-center justify-center w-[12rem] h-[12rem] bg-black p-4 rounded-3xl shadow-md">
            <Image
              src={project.logo}
              alt="Streaming Planet logo"
              className="w-[8rem]"
            />
          </div>
          <p className="pt-4">
            The logo seamlessly combines the iconic features of{" "}
            <span className="font-semibold">Pac-Man</span> with the{" "}
            <span className="font-semibold">
              circle button found on a PlayStation controller
            </span>
            . The <span className="font-semibold">&quot;Play&quot; symbol</span>{" "}
            ingeniously{" "}
            <span className="font-semibold">
              transforms into the mouth of Pac-Man
            </span>
            , forming a captivating fusion of{" "}
            <span className="font-semibold">gaming nostalgia</span> and{" "}
            <span className="font-semibold">modern interactivity</span>.
          </p>
        </div>
        <div className="pb-4">
          <h3 className="text-xl font-bold leading-tight tracking-tighter pt-4 pb-2 md:text-3xl times">
            Colors
          </h3>
          <div className="block md:flex">
            <div style={{ display: "flex" }}>
              <div className="w-12 h-12 bg-[#121212]"></div>
              <div className="w-12 h-12 bg-[#EC3A2C]"></div>
              <div className="w-12 h-12 bg-[#242526]"></div>
              <div className="w-12 h-12 bg-[#606060]"></div>
              <div className="w-12 h-12 bg-[#FFFFFF] border"></div>
            </div>
          </div>
          <p className="pt-4">
            The project embraces a color scheme of{" "}
            <span className="font-semibold">black and red</span>, a nod to the{" "}
            <span className="font-semibold">
              fervor and intensity of the gaming world
            </span>
            .
          </p>
        </div>
        <div className="pb-4">
          <h3 className="text-xl font-bold leading-tight tracking-tighter py-4 md:text-3xl times">
            Typography
          </h3>
          <p>
            The <span className="font-semibold">{project.typography}</span> font
            was chosen for its exceptional{" "}
            <span className="font-semibold">clarity and legibility</span>,
            ensuring that the content is easily understandable and visually
            pleasing to gamers and enthusiasts.
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
          <div className="grid gap-y-2">
            <p>
              The {project.title} project originated from a collaborative
              effort, during my Bachelor&apos;s degree, within the Web
              Programming course.
            </p>
            <p>
              Our challenge was to create a practical platform with a standard
              theme. Inspired by the world of gaming, we envisioned a unique
              social network &#45; {project.title}.
            </p>
            <p>
              {project.title} is not your typical social network. It&apos;s a
              haven for gamers, designed to connect and celebrate their shared
              passion. Imagine a platform that hosts forums for gaming
              enthusiasts, allowing them to share achievements, discuss their
              favorite games, and connect with like-minded individuals. With{" "}
              {project.title}, users can engage in meaningful conversations
              about their gaming experiences, strategies, and interests.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="pt-4 pb-8">
        <h2 className="text-2xl font-bold leading-tight tracking-tighter py-2 md:text-4xl times">
          Unleashing UX Magic
        </h2>
        <p className="text-muted-foreground">
          Dive deep into the heart of the project ideation.
        </p>
        <div className="py-4">
          <div className="grid gap-y-2">
            <p>
              Although low-fidelity prototypes were not part of the scope, due
              to the condensed project duration, the concept for {project.title}{" "}
              drew inspiration from three main sources: the{" "}
              <span className="font-semibold">Spotify</span> website and{" "}
              <span className="font-semibold">Facebook</span>. The fusion of
              these influences helped shape a unique and visionary user
              experience.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-[24rem]">
            <h4 className="text-lg font-semibold">Concept #1: Spotify</h4>
            <p className="text-muted-foreground pb-2">
              Spotify&apos;s visual allure.
            </p>
            <Image
              src={playerSpotify}
              alt="Spotify website"
              className="md:w-full rounded-md shadow-lg"
            />
          </div>
          <div className="md:w-[24rem]">
            <h4 className="text-lg font-semibold">Concept #2: Facebook</h4>
            <p className="text-muted-foreground pb-2">
              Empowering functionality, akin to Facebook.
            </p>
            <Image
              src={playerFacebook}
              alt="Facebook"
              className="w-full rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="pt-4 pb-8">
        <h2 className="text-2xl font-bold leading-tight tracking-tighter py-2 md:text-4xl times">
          High-Fidelity prototypes
        </h2>
        <div className="grid gap-y-4">
          <p className="text-muted-foreground">
            Explore detailed and refined prototypes that capture the essence of
            the envisioned user experience.
          </p>
        </div>
        <div className="flex flex-col gap-8 pt-6 mb-2 md:mb-4">
          <div>
            <h4 className="text-lg font-semibold">Hero section</h4>
            <p className="text-muted-foreground pb-2">
              Dive into the heart of the gaming community.
            </p>
            <div>
              <Image
                src={playerHero}
                alt="Hero section"
                className="md:w-[42rem] rounded-md shadow-lg mb-2"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <div>
            <h4 className="text-lg font-semibold">&quot;Why Player?&quot;</h4>
            <p className="text-muted-foreground pb-2">
              Discover what sets {project.title} apart.
            </p>
          </div>
          <div>
            <Image
              src={playerWhy}
              alt="Reasons"
              className="md:w-[42rem] rounded-md shadow-lg mb-2"
            />
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <div>
            <h4 className="text-lg font-semibold">Forum</h4>
            <p className="text-muted-foreground pb-2">
              Engage in lively gaming conversations.
            </p>
          </div>
          <div>
            <Image
              src={playerForum}
              alt="Forum"
              className="md:w-[42rem] rounded-md shadow-lg mb-2"
            />
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <div>
            <h4 className="text-lg font-semibold">User Feedback</h4>
            <p className="text-muted-foreground pb-2">
              See what players are saying.
            </p>
          </div>
          <div>
            <Image
              src={playerTestimonials}
              alt="Comments"
              className="md:w-[42rem] rounded-md shadow-lg mb-2"
            />
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <div>
            <h4 className="text-lg font-semibold">Contacts</h4>
            <p className="text-muted-foreground pb-2">
              Reach out to the {project.title} team.
            </p>
          </div>
          <div>
            <Image
              src={playerContacts}
              alt="Contacts"
              className="md:w-[42rem] rounded-md shadow-lg mb-2"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <h4 className="text-lg font-semibold">Footer</h4>
            <p className="text-muted-foreground pb-2">
              Navigate through additional resources.
            </p>
          </div>
          <div>
            <Image
              src={playerFooter}
              alt="Footer"
              className="md:w-[42rem] rounded-md shadow-lg mb-2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
