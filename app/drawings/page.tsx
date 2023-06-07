import Image from "next/image"
import { Metadata } from "next";

import { gokuKurama, kakashiTanjiro, tsuyuT } from "@/lib/drawings";
import "@/styles/myStyles.css"

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
        <p>
          This is my collection of drawings. Many of them are on TikTok!
        </p>
        <section className="portfolio">
          <Image
                  alt={'Goku Kurama'}
                  /* className="w-40 md:w-96" */
                  src={gokuKurama}
          />
          <Image
                  alt={'Kakashi + Tanjiro'}
                  src={kakashiTanjiro}
          />
          <Image
                  alt={'Tsuyu Turqueza'}
                  src={tsuyuT}
          />
        </section>
    </section>
  )
}
