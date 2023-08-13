import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import {
  bicepsEmoji,
  grantsFinderPreview,
  playerPreview,
  streamingPlanetPreview,
} from "@/lib/info"

import { Badge } from "./ui/badge"

export default function About() {
  return (
    <div>
      <div className="mx-auto py-4 lg:mx-0">
        <h1 className="text-2xl font-bold leading-tight tracking-tighter md:text-5xl times">
          About Me
        </h1>
      </div>
      <div className="grid gap-6">
        <p>
          My name is Leandro and I belong to House Francisco. Many know me as
          leartizt, online!
        </p>
        <p>
          I'm a finalist of the Bachelor Degree in Informatic Engineering, at
          IPS of which I became a Face, in 2022. During my cource, I discovered
          the area of UI/UX Design, which made me very happy, due to my enormous
          taste for Art. So, I can do my Art outside of my solid carreer and
          also apply my artistic skills on it!
        </p>
        <p>
          I'm also the eternal UI Jedi of the Order Build Up Labs, where I did
          my intership.
        </p>
        <hr />
        <p>
          I'm passionate about many creative pursuits, including drawing, music,
          photography, videography, acting and so many others!
        </p>
        <p>
          I think I'm able to say that I draw, since I was born and, one day, I
          got inspiration and started do share my artwork, on TikTok, as
          leartizt, my artistic name.
        </p>
        <p>
          Due to my taste for cinema and streaming, I started to write critics
          on Instagram and I'll be sharing it here, too!
        </p>
        <p>I also like to edit photos and create posts for social media.</p>
        <p>
          Fashion is also one of my favorite pursuits, so besides enjoying
          taking pictures, I love to create cool outfits and, of course, posing
          for the cameras!
        </p>
        <p>And, of course, I can't skip hitting the gym!</p>
      </div>
    </div>
  )
}
