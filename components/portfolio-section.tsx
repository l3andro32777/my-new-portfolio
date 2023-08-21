import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import {
  grantsFinderPreview,
  playerPreview,
  streamingPlanetPreview,
} from "@/lib/info"

import { Badge } from "./ui/badge"

const projects = [
  {
    id: 1,
    title: "GrantsFinder",
    href: "/portfolio/grantsFinder",
    description:
      "An AI chatbot that will help you find the best European grants available for projects or ideas.",
    date: "2023",
    category: "Internship",
    company: "Build Up Labs",
    image: grantsFinderPreview,
  },
  {
    id: 2,
    title: "Streaming Planet",
    href: "/portfolio/streamingPlanet",
    description:
      "Rental of cinema rooms, belonging to a fictitious company that provides Streaming services.",
    date: "2022",
    category: "Bachelor",
    company: "IPS",
    image: streamingPlanetPreview,
  },
  {
    id: 3,
    title: "Player",
    href: "#",
    description:
      "A social media made for gamers. It's a new way to allow gamers to share their taste for videogames.",
    date: "2021",
    category: "Bachelor",
    company: "IPS",
    image: playerPreview,
  },
  // More posts...
]

export default function Portfolio() {
  return (
    <div>
      <div className="mx-auto py-4 lg:mx-0">
        <h1 className="text-2xl font-bold leading-tight tracking-tighter pt-4 md:text-5xl times">
          Portfolio
        </h1>
        <p className="text-xs pt-4 text-muted-foreground sm:text-base">
          Here, you can find my UI/UX Design portfolio with examples I created,
          during my Bachelor Degree.
        </p>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-4 gap-y-16 pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="flex max-w-xl flex-col items-start justify-between"
          >
            <Image
              src={project.image}
              alt=""
              className="h-full w-full rounded-md"
            />
            <div className="flex items-center pt-2 gap-x-4 text-sm">
              <span className="font-bold">{project.date}</span>
              <Badge className="">{project.category}</Badge>
              <Badge variant={"outlineReverse"} className="">
                {project.company}
              </Badge>
            </div>
            <div className="group relative">
              <h3 className="text-xl font-bold leading-tight tracking-tighter pt-4 md:text-3xl times">
                <Link
                  href={project.href}
                  className="flex items-center gap-2 hover:underline"
                >
                  <span className="absolute inset-0" />
                  {project.title}
                  <ExternalLink />
                </Link>
              </h3>
              <p className="text-xs pt-2 sm:text-base">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
