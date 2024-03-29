import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { gokuKurama, kakashiTanjiro, tsuyuT } from "@/lib/drawings"
import {
  ateDeGatasPostFirst,
  ateDeGatasPostSecond,
  startupSpotlight,
} from "@/lib/posts"

const drawings = [gokuKurama, kakashiTanjiro, tsuyuT]
const posts = [ateDeGatasPostSecond, ateDeGatasPostFirst, startupSpotlight]

export default function Arts() {
  const [currentDrawingIndex, setCurrentDrawingIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDrawingIndex((prevIndex) => (prevIndex + 1) % drawings.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const [currentPostIndex, setCurrentPostIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPostIndex((prevIndex) => (prevIndex + 1) % drawings.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <div className="mx-auto py-4 lg:mx-0">
        <h1 className="text-2xl font-bold leading-tight tracking-tighter pt-4 md:text-5xl times">
          My Arts
        </h1>
        <p className="text-sm pt-4 text-muted-foreground sm:text-base">
          Discover my diverse creations beyond UI/UX design, including drawings,
          posts, videos and more.
        </p>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article>
          <Image
            alt={"Current Drawing"}
            className="w-full rounded-md"
            src={drawings[currentDrawingIndex]}
          />
          <div className="group relative">
            <h2 className="text-xl font-bold leading-tight tracking-tighter pt-4 md:text-4xl times">
              <Link
                href="/drawings"
                className="flex items-center gap-2 hover:underline"
              >
                <span className="absolute inset-0" />
                Drawings
                <ExternalLink />
              </Link>
            </h2>
            <p className="pt-2 text-sm sm:text-base">
              Check out is my collection of drawings. Many of them are on
              TikTok!
            </p>
          </div>
        </article>
        <article>
          <Image
            alt={"Current Post"}
            className="w-full rounded-md"
            src={posts[currentPostIndex]}
          />
          <div className="group relative">
            <h2 className="text-xl font-bold leading-tight tracking-tighter pt-4 md:text-4xl times">
              <Link
                href="/posts"
                className="flex items-center gap-2 hover:underline"
              >
                <span className="absolute inset-0" />
                Posts
                <ExternalLink />
              </Link>
            </h2>
            <p className="pt-2 text-sm sm:text-base">
              These are the posts I create for brands that contact me on
              Instagram.
            </p>
          </div>
        </article>
        <div>
          <article>
            {/* <Image
            alt={"Current Post"}
            className="w-full rounded-md"
            src={ateDeGatasPostSecond}
          /> */}
            <div className="group relative">
              <h2 className="text-xl font-bold leading-tight tracking-tighter pt-4 md:text-4xl times">
                <Link
                  href="/videos"
                  className="flex items-center gap-2 hover:underline"
                >
                  <span className="absolute inset-0" />
                  Videos
                  <ExternalLink />
                </Link>
              </h2>
              <p className="pt-2 text-sm sm:text-base">
                They asked me to demostrate the app. I made commercials!
              </p>
            </div>
          </article>
          <article>
            {/* <Image
            alt={"Current Post"}
            className="w-full rounded-md"
            src={ateDeGatasPostSecond}
          /> */}
            <div className="group relative">
              <h2 className="text-xl font-bold leading-tight tracking-tighter pt-4 md:text-4xl times">
                <Link
                  href="/critics"
                  className="flex items-center gap-2 hover:underline"
                >
                  <span className="absolute inset-0" />
                  Critics
                  <ExternalLink />
                </Link>
              </h2>
              <p className="pt-2 text-sm sm:text-base">
                Feel free to read my critics about films, tv shows and
                videogames.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
