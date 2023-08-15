import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import {
  bicepsEmoji,
  cameraEmoji,
  clapperEmoji,
  fireEmoji,
  grantsFinderPreview,
  loveEmoji,
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
      <div className="grid gap-6 text-sm md:text-base">
        <p>
          My name is Leandro and I belong to House Francisco. Many know me as
          leartizt, online!
        </p>
        <p>
          I&apos;m a finalist of the Bachelor Degree in Informatic Engineering,
          at IPS of which I became a Face, in 2022!
          <Image
            src={cameraEmoji}
            alt="Emoji"
            className="inline mb-1 mx-0.5 w-4 h-4"
          />{" "}
          During my cource, I discovered the area of UI/UX Design, which made me
          very happy, due to my enormous taste for Art. So, I can do my Art
          outside of my solid carreer and also apply my artistic skills on it!
          <Image
            src={fireEmoji}
            alt="Emoji"
            className="inline mb-1 mx-0.5 w-4 h-4"
          />
        </p>
        <p className="border-b border-muted-foreground pb-6">
          I&apos;m also the eternal UI Jedi of the Order Build Up Labs, where I
          did my intership.
        </p>
        <p>
          I&apos;m passionate about many creative pursuits, including drawing,
          music, photography, videography, acting and so many others!
          <Image
            src={loveEmoji}
            alt="Emoji"
            className="inline mb-1 mx-0.5 w-4 h-4"
          />
        </p>
        <p>
          I think I&apos;m able to say that I draw, since I was born and, one
          day, I got inspiration and started do share my artwork, on TikTok, as
          @leartizt, my artistic name.
        </p>
        <p>
          Due to my taste for cinema and streaming, I started to write critics
          on Instagram and I&apos;ll be sharing it here, too!
          <Image
            src={clapperEmoji}
            alt="Emoji"
            className="inline mb-1 mx-0.5 w-4 h-4"
          />
        </p>
        <p>I also like to edit photos and create posts for social media.</p>
        <p>
          Fashion is also one of my favorite pursuits, so besides enjoying
          taking pictures, I love to create cool outfits and, of course, posing
          for the cameras!
        </p>
        <p>
          And, of course, I can&apos;t skip hitting the gym!
          <Image
            src={bicepsEmoji}
            alt="Emoji"
            className="inline mb-1 mx-0.5 w-4 h-4"
          />
        </p>
      </div>
    </div>
  )
}
