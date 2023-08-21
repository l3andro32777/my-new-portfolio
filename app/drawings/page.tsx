import { Metadata } from "next"
import Image from "next/image"

import {
  dekuOneForAll,
  gokuAndFreezer,
  gokuKurama,
  gokuUltraInstinct,
  kakashiTanjiro,
  tsuyuT,
} from "@/lib/drawings"

import "@/styles/myStyles.css"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const drawings = [
  { alt: "Goku Kurama", src: gokuKurama },
  { alt: "Kakashi + Tanjiro", src: kakashiTanjiro },
  { alt: "Turquoise Tsuyu", src: tsuyuT },
  { alt: "Goku - Ultra Instinct", src: gokuUltraInstinct },
  { alt: "Deku - One For All Full Cowling", src: dekuOneForAll },
  { alt: "Goku and Frieza", src: gokuAndFreezer },
]

export const metadata: Metadata = {
  title: "Drawings",
  description: "My collection of drawings.",
}

export default function Drawings() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl times">
        Drawings
      </h1>
      <p>This is my collection of drawings. Many of them are on TikTok!</p>
      <section className="portfolio">
        {drawings.map((drawing, index) => (
          <Dialog key={index}>
            <DialogTrigger>
              <Image alt={drawing.alt} src={drawing.src} />
            </DialogTrigger>
            <DialogContent className="pt-10">
              <Image alt={drawing.alt} src={drawing.src} />
              <DialogTitle className="text-center">{drawing.alt}</DialogTitle>
            </DialogContent>
          </Dialog>
        ))}
      </section>
    </section>
  )
}
