import fs from "fs"
import path from "path"
import { Metadata } from "next"
import Link from "next/link"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"

export const metadata: Metadata = {
  title: "Critics",
  description: "My critics about films, tv shows and videogames.",
}

export default function Critics() {
  const criticsDirectory = path.join(process.cwd(), "critics")
  const fileNames = fs.readdirSync(criticsDirectory)

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl times">
        Critics
      </h1>
      <p>
        Here, you can read my critics about the films and tv shows I have
        watched and videogames I played.
      </p>
      <div>
        {fileNames.map((fileName) => {
          const filePath = path.join(criticsDirectory, fileName)
          const fileContents = fs.readFileSync(filePath, "utf8")
          const { data, content } = matter(fileContents)
          const { title, date } = data

          return (
            <div key={fileName}>
              <h1 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl times">
                {title}
              </h1>
              <p className="my-4 text-muted-foreground">{date}</p>
              <ReactMarkdown className="my-4">{content}</ReactMarkdown>
              <hr />
            </div>
          )
        })}
      </div>
    </section>
  )
}
