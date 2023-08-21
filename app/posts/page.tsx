import { Metadata } from "next"
import Image from "next/image"

import {
  ateDeGatasPostFirst,
  ateDeGatasPostSecond,
  startupSpotlight,
} from "@/lib/posts"

import "@/styles/myStyles.css"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const posts = [
  { alt: "Até de Gatas - 1st Edition", src: ateDeGatasPostFirst },
  { alt: "Até de Gatas - 2nd Edition", src: ateDeGatasPostSecond },
  { alt: "Startup Spotlight - Build Up Labs", src: startupSpotlight },
]

export const metadata: Metadata = {
  title: "Posts",
  description: "The posts I have created for social media.",
}

export default function Posts() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl times">
        Posts
      </h1>
      <p>
        These are the posts I create for brands that contact me on Instagram.
      </p>
      <section className="portfolio">
        {posts.map((post, index) => (
          <Dialog key={index}>
            <DialogTrigger>
              <Image alt={post.alt} src={post.src} />
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>{post.alt}</DialogTitle>
              <Image alt={post.alt} src={post.src} />
            </DialogContent>
          </Dialog>
        ))}
      </section>
    </section>
  )
}
