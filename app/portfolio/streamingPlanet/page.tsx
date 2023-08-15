import fs from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import matter from "gray-matter"
import { Code, MonitorSmartphone, User } from "lucide-react"
import ReactMarkdown from "react-markdown"

import {
  grantsFinderColors,
  grantsFinderLogo,
  grantsFinderPreview,
  streamingPlanetLogo,
  streamingPlanetPreview,
} from "@/lib/info"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Streaming Planet",
  description:
    "A platform for the rental of cinema rooms, belonging to a fictitious company that provides Streaming services.",
}

const project = {
  title: "Streaming Planet",
  href: "/portfolio/streamingPlanet",
  description:
    "A platform for the rental of cinema rooms, belonging to a fictitious company that provides Streaming services.",
  date: "2022",
  category: "Bachelor",
  company: "IPS",
  image: streamingPlanetPreview,
  public: "Lovers of Streaming, looking to experience a series in a cinema",
  language: "ASP.NET MVC and Bootstrap",
  platform: "Desktop",
  logo: streamingPlanetLogo,
  typography: "Roboto",
}

export default function GrantsFinder() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col md:flex-row justify-between gap-4">
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
      <div>
        <h2 className="text-2xl font-bold leading-tight tracking-tighter pt-4 pb-2 md:text-4xl times">
          Branding
        </h2>
        <p className="text-muted-foreground">
          Explore the essence of {project.title}&apos;s branding, where creativity
          merges seamlessly with purpose, crafting a distinctive identity.
        </p>
        <div className="pb-4">
          <h3 className="text-xl font-bold leading-tight tracking-tighter py-4 md:text-3xl times">
            Logo
          </h3>
          <div className="flex items-center justify-center w-[12rem] h-[12rem] bg-black p-4 rounded-3xl shadow-md">
            <Image src={project.logo} alt="" className="w-[12rem]" />
          </div>
        </div>
        <div className="pb-4">
          <h3 className="text-xl font-bold leading-tight tracking-tighter py-4 md:text-3xl times">
            Colors
          </h3>
          <div style={{ display: "flex" }}>
            <div className="w-12 h-12 bg-[#000000]"></div>
            <div className="w-12 h-12 bg-[#DC143C]"></div>
            <div className="w-12 h-12 bg-[#00BFFF]"></div>
            <div className="w-12 h-12 bg-[#707070]"></div>
            <div className="w-12 h-12 bg-[#FFFFFF] border"></div>
          </div>
        </div>
        <div className="pb-4">
          <h3 className="text-xl font-bold leading-tight tracking-tighter py-4 md:text-3xl times">
            Typography
          </h3>
        </div>
      </div>
    </section>
  )
}
