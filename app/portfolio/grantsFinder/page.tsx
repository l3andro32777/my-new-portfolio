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
} from "@/lib/info"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "GrantsFinder",
  description:
    "An AI chatbot that will help you find the best European grants available for projects or ideas.",
}

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
  typography: "Inter",
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
        </div>
        <div className="pb-4">
          <h3 className="text-xl font-bold leading-tight tracking-tighter py-4 md:text-3xl times">
            Colors
          </h3>
          <div className="block">
            <div style={{ display: "flex" }}>
              <div className="w-12 h-12 bg-[#020D1B]"></div>
              <div className="w-12 h-12 bg-[#0F1729]"></div>
              <div className="w-12 h-12 bg-[#0A85ED]"></div>
              <div className="w-12 h-12 bg-[#1E293B]"></div>
              <div className="w-12 h-12 bg-[#374357]"></div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="w-12 h-12 bg-[#5D6C7E]"></div>
              <div className="w-12 h-12 bg-[#E1E7EF]"></div>
              <div className="w-12 h-12 bg-[#F1F5F9]"></div>
              <div className="w-12 h-12 bg-[#F8FAFC]"></div>
              <div className="w-12 h-12 bg-[#D81E5B]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-4">
        <h3 className="text-xl font-bold leading-tight tracking-tighter py-4 md:text-3xl times">
          Typography
        </h3>
        <p>{project.typography}</p>
      </div>
    </section>
  )
}
