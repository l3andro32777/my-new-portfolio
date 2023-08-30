"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { avatar, avatar2, name, wavingHandEmoji } from "lib/info"
import { ArrowRight, Mouse } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import About from "@/components/about-section"
import Arts from "@/components/art-section"
import Portfolio from "@/components/portfolio-section"
import Testimonials from "@/components/testimonials-section"

export default function Home() {
  const [typedText, setTypedText] = useState("")
  const [isBlinking, setIsBlinking] = useState(true)
  const textToType = ["designer.", "<coder>."]
  const typingDelay = 120 // delay entre caracteres
  const wordCompleteDelay = 1000 // delay após escrever cada palavra

  useEffect(() => {
    let currentTextIndex = 0
    let currentText = ""
    let isDeleting = false

    const typeText = () => {
      const currentWord = textToType[currentTextIndex]
      if (isDeleting) {
        currentText = currentWord.substring(0, currentText.length - 1)
      } else {
        currentText = currentWord.substring(0, currentText.length + 1)
      }
      setTypedText(currentText)

      if (!isDeleting && currentText === currentWord) {
        isDeleting = true
        setTimeout(typeText, wordCompleteDelay)
      } else if (isDeleting && currentText === "") {
        isDeleting = false
        currentTextIndex = (currentTextIndex + 1) % textToType.length
        setTimeout(typeText, wordCompleteDelay)
      } else {
        setTimeout(typeText, typingDelay)
      }
    }

    setTimeout(typeText)
  }, [])

  useEffect(() => {
    const blinkingInterval = setInterval(() => {
      setIsBlinking((prevIsBlinking) => !prevIsBlinking)
    }, 500) // 500ms para piscar

    return () => {
      clearInterval(blinkingInterval)
    }
  }, [])

  return (
    <>
      <section className="container grid items-center pb-4 pt-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="mb-4 md:mb-0">
            <Badge className="text-sm">
              Hey, Mando!
              <Image alt="Waving Hand" className="w-4" src={wavingHandEmoji} />
            </Badge>
            <br className="hidden sm:inline" />
            <div className="max-w-[40rem]">
              <h1 className="text-2xl font-bold leading-tight tracking-tighter pt-4 md:text-5xl times">
                <em className="font-normal">I&apos;m</em> Leandro of House
                Francisco,
              </h1>
              <h1 className="text-2xl leading-tight tracking-tighter pt-2 md:text-5xl times">
                a<span className="typing-text font-bold"> {typedText}</span>
                {isBlinking && "|"}
              </h1>
              <p className="text-xs pt-4 text-muted-foreground sm:text-base">
                I&apos;m a <strong>UI Jedi (aka UI/UX Designer)</strong> and a
                creative <strong>Front-end Developer</strong>, but my skills are
                not just focused on that.
              </p>
            </div>
          </div>
          <div className="polaroid">
            <Image alt={name} className="w-[28rem] pt-2 pb-10" src={avatar} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 pt-8 pb-4 sm:pt-2">
          <Link href="#portfolio" className={`${buttonVariants()} gap-2`}>
            View work
            <ArrowRight />
          </Link>
          <Link
            href={siteConfig.links.cv}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "link" })}
          >
            Download CV
          </Link>
        </div>
        <div className="flex justify-center pb-4">
          <Mouse className="mouse-animation" />
        </div>
      </section>
      <section
        id="about"
        className="grid items-center pt-4 pb-12 bg-secondary text-secondary-foreground"
      >
        <div className="container">
          <About />
        </div>
      </section>
      <section id="portfolio" className="grid items-center pt-4 pb-12">
        <div className="container">
          <Portfolio />
        </div>
      </section>
      <section
        id="arts"
        className="grid items-center pt-4 pb-12 bg-secondary text-secondary-foreground"
      >
        <div className="container">
          <Arts />
        </div>
      </section>
      <section id="testimonials" className="grid items-center pt-4 pb-12">
        <div className="container">
          <Testimonials />
        </div>
      </section>
    </>
    // <section className="container grid items-center pb-4 pt-4">
    //   <div className="flex flex-col md:flex-row items-center justify-between gap-8">
    //     {/* <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl times">
    //       Hello! <br className="hidden sm:inline" />
    //       <em className="font-normal">I&apos;m</em> Leandro of House Francisco.
    //     </h1>
    //     <Badge size="lg">Hello!</Badge>
    //     <Image alt={name} className="rounded-full w-40 md:w-96" src={avatar} />
    //     <div className="">
    //       <h1 className="text-3xl font-bold leading-tight tracking-tighter pb-2 md:text-5xl times">
    //         designer
    //       </h1>
    //       <p className="text-xs sm:text-base">
    //         I&apos;m a <strong>UI Jedi (aka UI/UX Designer)</strong>, but my
    //         skills are not just focused on that.
    //       </p>
    //     </div>
    //     <Image alt={name} className="w-[32rem]" src={avatar2} />
    //     <div className="">
    //       <h1 className="text-3xl font-bold leading-tight tracking-tighter pb-2 md:text-5xl times">
    //         &lt; coder &gt;
    //       </h1>
    //       <p className="text-xs sm:text-base">
    //         I&apos;m a <strong>UI Jedi (aka UI/UX Designer)</strong>, but my
    //         skills are not just focused on that.
    //       </p>
    //     </div> */}
    //     <div className="mb-4 md:mb-0">
    //       <Badge className="text-sm">
    //         Hey, Mando!
    //         <Image alt="Waving Hand" className="w-4" src={wavingHandEmoji} />
    //       </Badge>
    //       <br className="hidden sm:inline" />
    //       <div className="max-w-[40rem]">
    //         <h1 className="text-3xl font-bold leading-tight tracking-tighter pt-4 md:text-5xl times">
    //           <em className="font-normal">I&apos;m</em> Leandro of House
    //           Francisco,
    //         </h1>
    //         <h1 className="text-3xl leading-tight tracking-tighter pt-2 md:text-5xl times">
    //           a<span className="typing-text font-bold"> {typedText}</span>
    //           {isBlinking && "|"}
    //         </h1>
    //         <p className="text-xs pt-2 text-muted-foreground sm:text-base">
    //           I&apos;m a <strong>UI Jedi (aka UI/UX Designer)</strong> and a
    //           creative <strong>Front-end Developer</strong>, but my skills are
    //           not just focused on that.
    //         </p>
    //       </div>
    //     </div>
    //     <Image alt={name} className="w-[32rem]" src={avatar2} />
    //   </div>
    //   {/* <p>
    //     I&apos;m a <strong>UI Jedi (aka UI/UX Designer)</strong>, but my skills
    //     are not just focused on that.
    //   </p>
    //   <p>
    //     This is my portfolio, where I&apos;ll be sharing my work with you. Enjoy
    //     it and may the Force be with you!
    //   </p> */}
    //   <div className="flex flex-col md:flex-row gap-4">
    //     {/* <Link
    //       href={siteConfig.links.cv}
    //       target="_blank"
    //       rel="noreferrer"
    //       className={buttonVariants()}
    //     >
    //       Download CV
    //     </Link>
    //     <Link
    //       target="_blank"
    //       rel="noreferrer"
    //       href="mailto:leartizt.contacto@gmail.com"
    //       className={buttonVariants({ variant: "link" })}
    //     >
    //       Send e-mail
    //     </Link> */}
    //   </div>
    // </section>
  )
}
